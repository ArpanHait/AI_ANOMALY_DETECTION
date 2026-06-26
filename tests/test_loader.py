import unittest
import tempfile
import shutil
from pathlib import Path
import pandas as pd
from data.loader import load_sensor_csv, stream_batches_from_dataframe


class TestLoader(unittest.TestCase):
    """Tests for the data loader utility functions."""

    def setUp(self):
        # Create a temporary directory for test files
        self.test_dir = Path(tempfile.mkdtemp())
        self.csv_path = self.test_dir / "test_sensors.csv"

        # Create dummy sensor data
        self.dummy_data = pd.DataFrame({
            "timestamp": ["2026-01-01 00:00:00", "2026-01-01 00:01:00", "2026-01-01 00:02:00"],
            "vibration": [1.2, 1.3, 1.4],
            "temperature": [45.0, 45.2, 45.5]
        })
        self.dummy_data.to_csv(self.csv_path, index=False)

    def tearDown(self):
        # Remove the temporary directory
        shutil.rmtree(self.test_dir)

    def test_load_sensor_csv_success(self):
        """Test successful CSV loading and date parsing."""
        df = load_sensor_csv(self.csv_path, parse_dates=True)
        self.assertEqual(len(df), 3)
        self.assertTrue(pd.api.types.is_datetime64_any_dtype(df["timestamp"]))
        self.assertEqual(list(df.columns), ["timestamp", "vibration", "temperature"])

    def test_load_sensor_csv_no_date_parsing(self):
        """Test CSV loading without date parsing."""
        df = load_sensor_csv(self.csv_path, parse_dates=False)
        self.assertEqual(len(df), 3)
        self.assertFalse(pd.api.types.is_datetime64_any_dtype(df["timestamp"]))

    def test_load_sensor_csv_file_not_found(self):
        """Test that FileNotFoundError is raised when file does not exist."""
        non_existent_path = self.test_dir / "does_not_exist.csv"
        with self.assertRaises(FileNotFoundError):
            load_sensor_csv(non_existent_path)

    def test_stream_batches_from_dataframe_success(self):
        """Test successfully slicing dataframe into overlapping windows."""
        df = pd.DataFrame({
            "value": list(range(10))
        })
        # Window size 4, step 2:
        # Batch 1: index 0-3 (values 0-3)
        # Batch 2: index 2-5 (values 2-5)
        # Batch 3: index 4-7 (values 4-7)
        # Batch 4: index 6-9 (values 6-9)
        batches = list(stream_batches_from_dataframe(df, window_size=4, step=2))
        self.assertEqual(len(batches), 4)
        self.assertEqual(list(batches[0]["value"]), [0, 1, 2, 3])
        self.assertEqual(list(batches[1]["value"]), [2, 3, 4, 5])
        self.assertEqual(list(batches[3]["value"]), [6, 7, 8, 9])

    def test_stream_batches_from_dataframe_max_batches(self):
        """Test max_batches parameter limit."""
        df = pd.DataFrame({
            "value": list(range(10))
        })
        batches = list(stream_batches_from_dataframe(df, window_size=4, step=2, max_batches=2))
        self.assertEqual(len(batches), 2)

    def test_stream_batches_from_dataframe_invalid_params(self):
        """Test validation of window_size and step."""
        df = pd.DataFrame({"value": [1, 2, 3]})
        with self.assertRaises(ValueError):
            list(stream_batches_from_dataframe(df, window_size=0))
        with self.assertRaises(ValueError):
            list(stream_batches_from_dataframe(df, window_size=2, step=0))


if __name__ == "__main__":
    unittest.main()
