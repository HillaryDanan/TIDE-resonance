import pytest

def test_framework_imports():
    """Test that all modules import correctly"""
    import src.resonance.core
    import src.music.analyzer
    import src.sensory.integration_profiles
    assert True

def test_theoretical_disclaimer():
    """Ensure theoretical disclaimer present"""
    from src.resonance.calculator import ResonanceCalculator
    calc = ResonanceCalculator()
    assert "research" in calc.disclaimer.lower()
