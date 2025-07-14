"""
TIDE-resonance Core Module
Theoretical framework for cognitive-sensory resonance patterns
"""

from dataclasses import dataclass
from typing import Dict, List, Optional
import numpy as np

@dataclass
class TIDEPattern:
    """Reference to core TIDE architectural pattern"""
    name: str  # NT-TIDE, ASD-TIDE, ADHD-TIDE
    self_dimension: str  # internal/external
    time_dimension: str  # internal/external
    integration_strength: float  # Φ (phi) value
