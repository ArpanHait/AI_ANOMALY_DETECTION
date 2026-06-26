import unittest
from services.decision_engine import _clip


class TestDecisionEngineHelpers(unittest.TestCase):
    """Tests for the helper functions in decision_engine.py."""

    def test_clip_within_bounds(self):
        """Test value that is strictly within the bounds."""
        self.assertEqual(_clip(5.0, 0.0, 10.0), 5.0)

    def test_clip_below_lower_bound(self):
        """Test value that is below the lower bound."""
        self.assertEqual(_clip(-1.0, 0.0, 10.0), 0.0)

    def test_clip_above_upper_bound(self):
        """Test value that is above the upper bound."""
        self.assertEqual(_clip(11.0, 0.0, 10.0), 10.0)

    def test_clip_exact_lower_bound(self):
        """Test value that is exactly equal to the lower bound."""
        self.assertEqual(_clip(0.0, 0.0, 10.0), 0.0)

    def test_clip_exact_upper_bound(self):
        """Test value that is exactly equal to the upper bound."""
        self.assertEqual(_clip(10.0, 0.0, 10.0), 10.0)

    def test_clip_negative_interval(self):
        """Test clipping within a negative interval."""
        self.assertEqual(_clip(-5.0, -10.0, -2.0), -5.0)
        self.assertEqual(_clip(-15.0, -10.0, -2.0), -10.0)
        self.assertEqual(_clip(-1.0, -10.0, -2.0), -2.0)


if __name__ == "__main__":
    unittest.main()
