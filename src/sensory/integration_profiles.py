"""
Sensory Integration Profiles for TIDE Patterns
Theoretical framework for multi-modal sensory processing
"""

from dataclasses import dataclass
from typing import Dict, List, Optional

@dataclass
class SensoryModality:
    """Represents a sensory processing channel"""
    name: str
    sensitivity_range: tuple  # (min, max)
    preferred_intensity: float
    integration_style: str

@dataclass
class SensoryProfile:
    """Complete sensory profile for a TIDE pattern"""
    pattern: str
    auditory: SensoryModality
    visual: SensoryModality
    tactile: SensoryModality
    vestibular: SensoryModality
    proprioceptive: SensoryModality
    cross_modal_integration: str
    regulation_strategies: List[str]
