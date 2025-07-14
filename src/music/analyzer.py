"""
Music-Cognition Pattern Analysis
Exploring theoretical relationships between music and TIDE patterns
"""

from dataclasses import dataclass
from typing import Dict, List, Optional

@dataclass
class SpotifyAudioFeatures:
    """Spotify API audio feature mapping"""
    track_id: str
    energy: float  # 0-1
    valence: float  # 0-1
    tempo: float  # BPM
    danceability: float
    acousticness: float
    instrumentalness: float
