"""Stateful industrial sensor simulator for real-time streaming demos."""

from dataclasses import dataclass, field
from typing import Any, Dict, Optional

import numpy as np
import pandas as pd

from data.synthetic import SimulationParams, _sensor_covariance


def _inject_realtime_anomaly(
    t: int,
    kind: int,
    signals: Dict[str, float],
    params: SimulationParams,
    drift_horizon: int,
    rng: np.random.Generator,
) -> None:
    """Apply anomaly spikes or drifts to real-time sensor signals dictionary."""
    if kind == 0:
        signals["vibration"] += params.spike_scale * float(rng.normal(2.5, 0.4))
        signals["temp"] += params.spike_scale * float(rng.normal(1.2, 0.2))
    elif kind == 1:
        signals["current"] *= 1.0 + params.spike_scale * 0.08
    elif kind == 2:
        signals["flow"] *= 0.65
        signals["pressure"] -= 0.35
    else:
        tail = max(0, drift_horizon - t)
        signals["vibration"] += params.drift_scale * tail
        signals["temp"] += params.drift_scale * 0.8 * tail


@dataclass
class IndustrialRealtimeSimulator:
    """Emit one multivariate sensor row per step with the same physics as batch data."""

    params: SimulationParams = field(default_factory=SimulationParams)
    drift_horizon: int = 12_000
    load_period_steps: int = 5_000
    base_time: Optional[pd.Timestamp] = None

    def __post_init__(self) -> None:
        """Initialize RNG, wear, and time index."""

        self._rng = np.random.default_rng(self.params.seed)
        self._wear = 0.0
        self._t = 0
        self._epoch = self.base_time if self.base_time is not None else pd.Timestamp("2024-01-01", tz="UTC")
        self._freq_td = pd.to_timedelta(self.params.freq)

    def _compute_signals(self, load: float, noise: np.ndarray) -> Dict[str, float]:
        """Compute nominal sensor readings with multivariate noise."""

        vibration_base = 1.2 + 2.8 * load + 6.0 * self._wear**1.35
        current_base = 12.0 + 18.0 * load + 9.0 * self._wear
        temp_base = 38.0 + 22.0 * load + 28.0 * self._wear**1.2
        pressure_base = 4.5 + 0.8 * load - 0.4 * self._wear
        flow_base = 180.0 * load * (1.0 - 0.35 * self._wear)
        valve_base = 40.0 + 35.0 * load

        return {
            "vibration": float(vibration_base + noise[1] * 0.35),
            "current": float(current_base + noise[0] * 0.45),
            "temp": float(temp_base + noise[2] * 0.5),
            "pressure": float(pressure_base + noise[3] * 0.06),
            "flow": float(flow_base + noise[4] * 4.0),
            "valve": float(np.clip(valve_base + noise[5] * 2.0, 5.0, 95.0)),
        }

    def _apply_anomaly(self, t: int, signals: Dict[str, float]) -> int:
        """Randomly inject anomaly states into computed signals."""

        if self._rng.random() >= self.params.anomaly_probability:
            return 0

        kind = int(self._rng.integers(0, 4))
        _inject_realtime_anomaly(
            t,
            kind,
            signals,
            self.params,
            self.drift_horizon,
            self._rng,
        )
        return 1

    def step(self) -> Dict[str, Any]:
        """Advance the plant simulation by one sample and return a sensor record."""

        t = self._t
        self._t += 1

        self._wear = float(
            np.clip(
                self._wear + self._rng.normal(self.params.wear_increment_mu, self.params.wear_increment_sigma),
                0.0,
                1.0,
            )
        )
        noise = self._rng.multivariate_normal(mean=np.zeros(6), cov=_sensor_covariance())
        angle = (12.0 * np.pi * t) / max(self.load_period_steps, 1)
        load = float(np.clip(0.55 + 0.25 * np.sin(angle) + self._rng.normal(0, 0.02), 0.2, 1.0))

        signals = self._compute_signals(load, noise)
        anomaly_flag = self._apply_anomaly(t, signals)

        timestamp = self._epoch + t * self._freq_td
        return {
            "timestamp": timestamp,
            "asset_id": self.params.asset_id,
            "motor_current_a": signals["current"],
            "vibration_rms": signals["vibration"],
            "bearing_temp_c": signals["temp"],
            "inlet_pressure_bar": signals["pressure"],
            "flow_rate_l_min": signals["flow"],
            "valve_position_pct": signals["valve"],
            "sim_anomaly_flag": anomaly_flag,
        }
