
// Find the updateAgents function and modify it to include trust
// This should be added to the music interaction section
function applyTrustToResonance(agent1, agent2, baseResonance) {
    const trust1to2 = agentTrustMatrix[agent1.id]?.[agent2.id] || 0.5;
    const trust2to1 = agentTrustMatrix[agent2.id]?.[agent1.id] || 0.5;
    
    // Bidirectional trust affects resonance
    const avgTrust = (trust1to2 + trust2to1) / 2;
    const trustModifier = 0.5 + 0.5 * avgTrust; // Range: 0.5x to 1.0x
    
    return baseResonance * trustModifier;
}

