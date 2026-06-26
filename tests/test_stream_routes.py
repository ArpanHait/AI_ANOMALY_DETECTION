import unittest
from api.stream_routes import _parse_int


class TestStreamRoutes(unittest.TestCase):
    """Tests for the helper functions in stream_routes.py."""

    def test_parse_int_none(self):
        """Test that None input returns the default value."""
        self.assertEqual(_parse_int(None, default=10), 10)

    def test_parse_int_empty_string(self):
        """Test that empty string input returns the default value."""
        self.assertEqual(_parse_int("", default=10), 10)

    def test_parse_int_invalid_string(self):
        """Test that non-integer string input returns the default value."""
        self.assertEqual(_parse_int("abc", default=10), 10)
        self.assertEqual(_parse_int("1.5", default=10), 10)

    def test_parse_int_valid_string(self):
        """Test that valid integer string is parsed successfully."""
        self.assertEqual(_parse_int("42", default=10), 42)

    def test_parse_int_min_bound(self):
        """Test that value below min_v is capped at min_v."""
        # Value 0 is below default min_v (1)
        self.assertEqual(_parse_int("0", default=10), 1)
        # Value 2 is below custom min_v (5)
        self.assertEqual(_parse_int("2", default=10, min_v=5), 5)

    def test_parse_int_max_bound(self):
        """Test that value above max_v is capped at max_v."""
        # Value 100 is above custom max_v (50)
        self.assertEqual(_parse_int("100", default=10, max_v=50), 50)


if __name__ == "__main__":
    unittest.main()
