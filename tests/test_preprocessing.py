import unittest
import pandas as pd
import numpy as np
from services.preprocessing import validate_sensor_window, enforce_minimum_window


class TestPreprocessing(unittest.TestCase):
    """Tests for the preprocessing helper functions."""

    def test_validate_sensor_window_success(self):
        """Test validation with correct columns and numeric values."""
        df = pd.DataFrame({
            "sensor1": [1.0, 2.0, 3.0],
            "sensor2": [10.0, 20.0, 30.0],
            "other_col": ["a", "b", "c"]
        })
        required = ["sensor1", "sensor2"]
        out = validate_sensor_window(df, required)
        self.assertEqual(len(out), 3)
        self.assertEqual(list(out["sensor1"]), [1.0, 2.0, 3.0])

    def test_validate_sensor_window_missing_columns(self):
        """Test that ValueError is raised if required columns are missing."""
        df = pd.DataFrame({
            "sensor1": [1.0, 2.0, 3.0]
        })
        required = ["sensor1", "sensor2"]
        with self.assertRaises(ValueError) as context:
            validate_sensor_window(df, required)
        self.assertIn("Missing required sensor columns", str(context.exception))

    def test_validate_sensor_window_empty_dataframe(self):
        """Test that ValueError is raised if the DataFrame is empty."""
        df = pd.DataFrame(columns=["sensor1", "sensor2"])
        required = ["sensor1", "sensor2"]
        with self.assertRaises(ValueError) as context:
            validate_sensor_window(df, required)
        self.assertIn("Sensor window is empty", str(context.exception))

    def test_validate_sensor_window_impute_missing_values(self):
        """Test that minor missing/NaN values are successfully filled via ffill/bfill."""
        # Setup: NaN at index 1 is filled from index 0/2
        df = pd.DataFrame({
            "sensor1": [1.0, np.nan, 3.0],
            "sensor2": [10.0, 20.0, np.nan]
        })
        required = ["sensor1", "sensor2"]
        out = validate_sensor_window(df, required)
        self.assertEqual(list(out["sensor1"]), [1.0, 1.0, 3.0]) # 1.0 forward filled
        self.assertEqual(list(out["sensor2"]), [10.0, 20.0, 20.0]) # 20.0 forward filled

    def test_validate_sensor_window_unable_to_coerce(self):
        """Test that ValueError is raised if values cannot be converted/filled."""
        # Non-numeric string values that cannot be parsed
        df = pd.DataFrame({
            "sensor1": ["abc", "def", "ghi"]
        })
        required = ["sensor1"]
        with self.assertRaises(ValueError) as context:
            validate_sensor_window(df, required)
        self.assertIn("Unable to coerce sensor readings to numeric values", str(context.exception))

    def test_enforce_minimum_window_boundary_conditions(self):
        """Test enforce_minimum_window with exact boundary cases (size = min_rows - 1, min_rows, min_rows + 1)."""
        min_rows = 5

        # Case 1: size = min_rows - 1 (4 rows) -> Should raise ValueError
        df_under = pd.DataFrame({"value": range(4)})
        with self.assertRaises(ValueError) as context:
            enforce_minimum_window(df_under, min_rows)
        self.assertIn(f"Need at least {min_rows} samples, received 4", str(context.exception))

        # Case 2: size = min_rows (5 rows) -> Should succeed (no exception)
        df_exact = pd.DataFrame({"value": range(5)})
        enforce_minimum_window(df_exact, min_rows)

        # Case 3: size = min_rows + 1 (6 rows) -> Should succeed (no exception)
        df_over = pd.DataFrame({"value": range(6)})
        enforce_minimum_window(df_over, min_rows)


if __name__ == "__main__":
    unittest.main()
