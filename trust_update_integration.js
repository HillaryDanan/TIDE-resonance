
// Add to existing agent update function
const originalUpdateAgent = updateAgent;
updateAgent = function(agent, music, otherAgent) {
  // Original update
  originalUpdateAgent(agent, music, otherAgent);
  
  // Calculate interaction outcome based on resonance
  const resonanceQuality = calculateResonanceQuality(agent, otherAgent);
  const interactionOutcome = resonanceQuality > agent.resonanceThreshold ? 1 : 0;
  
  // Update trust based on interaction
  const currentTrust = agentTrustMatrix[agent.id][otherAgent.id] || 
                       TRUST_PARAMS[agent.architecture].initialTrust;
  const newTrust = calculateTrustEvolution(
    currentTrust, 
    interactionOutcome, 
    agent.architecture
  );
  
  // Store updated trust
  agentTrustMatrix[agent.id][otherAgent.id] = newTrust;
  
  // Apply trust modulation to resonance display
  if (displayMode === "resonance") {
    agent.resonance *= (0.5 + 0.5 * newTrust);
  }
};

