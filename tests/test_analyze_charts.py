import unittest
import pandas as pd
import numpy as np
from services.analyze_charts import collect_highlight_indices


class TestAnalyzeCharts(unittest.TestCase):
    """Tests for the helper functions in analyze_charts.py."""

    def test_collect_highlight_indices_empty_df(self):
        """Test with an empty DataFrame."""
        df = pd.DataFrame()
        self.assertEqual(collect_highlight_indices(df, model_anomaly_last=False), [])

    def test_collect_highlight_indices_model_anomaly_last(self):
        """Test that the last index is added when model_anomaly_last is True."""
        df = pd.DataFrame({
            "value": [1, 2, 3, 4]
        })
        # Last index should be 3
        self.assertEqual(collect_highlight_indices(df, model_anomaly_last=True), [3])
        self.assertEqual(collect_highlight_indices(df, model_anomaly_last=False), [])

    def test_collect_highlight_indices_anomaly_flag(self):
        """Test collecting indices from anomaly_flag column."""
        # 1 at index 1 and 3, invalid/none/other values at other indexes
        df = pd.DataFrame({
            "anomaly_flag": [0, 1, "invalid", 1.0, None]
        })
        self.assertEqual(collect_highlight_indices(df, model_anomaly_last=False), [1, 3])

    def test_collect_highlight_indices_vibration_rms_outliers(self):
        """Test collecting indices from vibration_rms outliers (>2.4 sigma)."""
        # Normal vibration values around 1.0, with a spike at index 4 (5.0)
        vibration = [1.0, 1.1, 1.2, 1.0, 5.0, 1.1, 1.0, 1.2, 1.0, 1.1]
        df = pd.DataFrame({
            "vibration_rms": vibration
        })
        # Vibration outlier should be at index 4
        self.assertEqual(collect_highlight_indices(df, model_anomaly_last=False), [4])

    def test_collect_highlight_indices_vibration_rms_too_short(self):
        """Test that vibration_rms is ignored if length of DataFrame <= 3."""
        # Spiky value at index 2 (5.0), but len(df) is 3 (<=3)
        df = pd.DataFrame({
            "vibration_rms": [1.0, 1.1, 5.0]
        })
        self.assertEqual(collect_highlight_indices(df, model_anomaly_last=False), [])

    def test_collect_highlight_indices_combined(self):
        """Test combining anomaly_flag, model_anomaly_last, and vibration_rms."""
        df = pd.DataFrame({
            "anomaly_flag": [0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            "vibration_rms": [1.0, 1.1, 1.2, 1.0, 5.0, 1.1, 1.0, 1.2, 1.0, 1.1]
        })
        # anomaly_flag has 1 at index 1
        # vibration_rms has outlier at index 4
        # model_anomaly_last is True, so last index 9 is added
        self.assertEqual(collect_highlight_indices(df, model_anomaly_last=True), [1, 4, 9])


if __name__ == "__main__":
    unittest.main()
