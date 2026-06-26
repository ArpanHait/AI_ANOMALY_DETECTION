import unittest
import pandas as pd
import numpy as np
from services.rca import RootCauseAnalyzer, _top_correlations


class TestRCA(unittest.TestCase):
    """Tests for RootCauseAnalyzer and _top_correlations."""

    def setUp(self):
        self.sensor_cols = [
            "motor_current_a",
            "vibration_rms",
            "bearing_temp_c",
            "inlet_pressure_bar",
            "flow_rate_l_min",
            "valve_position_pct"
        ]
        # Base template data (10 rows)
        self.base_data = {
            "motor_current_a": [15.0] * 10,
            "vibration_rms": [1.2] * 10,
            "bearing_temp_c": [45.0] * 10,
            "inlet_pressure_bar": [4.0] * 10,
            "flow_rate_l_min": [120.0] * 10,
            "valve_position_pct": [50.0] * 10
        }

    def test_top_correlations_too_few_columns(self):
        """Test that _top_correlations returns empty list if columns < 2."""
        df = pd.DataFrame(self.base_data)
        self.assertEqual(_top_correlations(df, ["vibration_rms"], top_k=3), [])

    def test_top_correlations_too_few_rows(self):
        """Test that _top_correlations returns empty list if rows < 3."""
        df = pd.DataFrame(self.base_data).iloc[:2]
        self.assertEqual(_top_correlations(df, self.sensor_cols, top_k=3), [])

    def test_top_correlations_ranking(self):
        """Test that correlations are computed and ranked descending by absolute value."""
        # Create perfect positive correlation between motor_current_a and vibration_rms (1.0)
        # and negative correlation between bearing_temp_c and flow_rate_l_min (-1.0)
        df = pd.DataFrame({
            "motor_current_a": [10.0, 20.0, 30.0],
            "vibration_rms": [1.0, 2.0, 3.0],
            "bearing_temp_c": [100.0, 90.0, 80.0],
            "flow_rate_l_min": [5.0, 10.0, 15.0]
        })
        cols = ["motor_current_a", "vibration_rms", "bearing_temp_c", "flow_rate_l_min"]
        results = _top_correlations(df, cols, top_k=2)

        # Check top correlations
        self.assertEqual(len(results), 2)
        # Should yield 1.0 or -1.0 (absolute value is 1.0)
        self.assertAlmostEqual(results[0][2], 1.0)
        self.assertAlmostEqual(results[1][2], 1.0)

    def test_rca_normal_envelope(self):
        """Test normal operating envelope output."""
        df = pd.DataFrame(self.base_data)
        analyzer = RootCauseAnalyzer(self.sensor_cols)
        insight = analyzer.analyze(df)

        self.assertEqual(insight.primary_hypothesis, "Within normal operating envelope")
        self.assertEqual(insight.confidence, 0.35)

    def test_rca_bearing_degradation(self):
        """Test triggering bearing degradation rule (vibration > 6.5 and temp > 72.0)."""
        data = self.base_data.copy()
        # Elevate vibration_rms and bearing_temp_c in the last 5 rows
        data["vibration_rms"] = [1.2] * 5 + [7.0] * 5
        data["bearing_temp_c"] = [45.0] * 5 + [75.0] * 5
        df = pd.DataFrame(data)

        analyzer = RootCauseAnalyzer(self.sensor_cols)
        insight = analyzer.analyze(df)

        self.assertEqual(insight.primary_hypothesis, "Bearing degradation or misalignment (thermal + vibration coupling)")
        self.assertEqual(insight.confidence, 0.78)
        self.assertIn("Elevated vibration with rising bearing temperature", insight.evidence)

    def test_rca_hydraulic_restriction(self):
        """Test triggering hydraulic restriction rule (flow < 95.0 and current > 26.0)."""
        data = self.base_data.copy()
        # Depress flow and elevate current in the last 5 rows
        data["flow_rate_l_min"] = [120.0] * 5 + [90.0] * 5
        data["motor_current_a"] = [15.0] * 5 + [28.0] * 5
        df = pd.DataFrame(data)

        analyzer = RootCauseAnalyzer(self.sensor_cols)
        insight = analyzer.analyze(df)

        self.assertEqual(insight.primary_hypothesis, "Hydraulic restriction or impeller wear reducing throughput")
        self.assertEqual(insight.confidence, 0.72)
        self.assertIn("High motor current with depressed flow", insight.evidence)

    def test_rca_mechanical_imbalance(self):
        """Test triggering mechanical imbalance rule (vibration > 7.8, temp <= 72.0)."""
        data = self.base_data.copy()
        # Elevate vibration_rms only (temp stays nominal at 45.0) in the last 5 rows
        data["vibration_rms"] = [1.2] * 5 + [8.0] * 5
        df = pd.DataFrame(data)

        analyzer = RootCauseAnalyzer(self.sensor_cols)
        insight = analyzer.analyze(df)

        self.assertEqual(insight.primary_hypothesis, "Mechanical imbalance or looseness")
        self.assertEqual(insight.confidence, 0.68)
        self.assertIn("Isolation in vibration RMS trend", insight.evidence)


if __name__ == "__main__":
    unittest.main()
