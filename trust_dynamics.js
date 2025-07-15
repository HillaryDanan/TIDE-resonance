
// TRUST DYNAMICS PARAMETERS
// Note: These are research parameters for simulation
// Based on game theory trust evolution models
// All values are normalized [0,1] for research consistency

const TRUST_PARAMS = {
  // Architecture-specific trust parameters
  // Based on theoretical model, not empirical data
  NT: {
    initialTrust: 0.5,    // Baseline neutral starting point
    learningRate: 0.1,    // Conservative trust updates
    decayRate: 0.05,      // Moderate forgetting
    resonanceThreshold: 0.6, // Moderate compatibility needed
    // Research note: These model theoretical differences, not prescriptive values
  },
  ASD: {
    initialTrust: 0.3,    // More cautious initial stance (research hypothesis)
    learningRate: 0.15,   // Stronger response to consistent patterns
    decayRate: 0.02,      // Longer memory (pattern-focused)
    resonanceThreshold: 0.8, // Higher predictability needs
  },
  ADHD: {
    initialTrust: 0.7,    // More open initial stance (research hypothesis)
    learningRate: 0.2,    // Rapid adaptation
    decayRate: 0.1,       // Quicker forgetting/forgiveness
    resonanceThreshold: 0.4, // Lower threshold, novelty-seeking
  }
};

// RESEARCH DISCLAIMER
const RESEARCH_CONTEXT = {
  purpose: "Simulation parameters for research exploration",
  basis: "Theoretical model for cognitive architecture interactions",
  limitations: "Simplified model for research purposes only",
  interpretation: "Not diagnostic or prescriptive - research tool only"
};


// Trust evolution based on game theory iterative trust model
function calculateTrustEvolution(currentTrust, outcome, architecture) {
  // Basic trust update: T(t+1) = T(t) + α * (outcome - expectation)
  const params = TRUST_PARAMS[architecture];
  const learningRate = params.learningRate;
  const decay = params.decayRate;
  
  // Update based on interaction outcome
  const trustDelta = learningRate * (outcome - currentTrust);
  const decayEffect = -decay * (currentTrust - params.initialTrust);
  
  const newTrust = currentTrust + trustDelta + decayEffect;
  
  // Bound between 0 and 1
  return Math.max(0, Math.min(1, newTrust));
}

// Calculate resonance modulated by trust
function calculateTrustModulatedResonance(agent1, agent2, baseResonance) {
  const trustLevel = agentTrustMatrix[agent1.id][agent2.id] || 0.5;
  
  // Trust acts as a modifier on resonance strength
  // Low trust reduces resonance, high trust amplifies it
  const trustModifier = 0.5 + 0.5 * trustLevel; // Range: 0.5 to 1.0
  
  return {
    resonanceStrength: baseResonance * trustModifier,
    trustLevel: trustLevel,
    modifiedResonance: baseResonance * trustModifier
  };
}


// TRUST DYNAMICS PARAMETERS
// Note: These are research parameters for simulation
// Based on game theory trust evolution models
// All values are normalized [0,1] for research consistency

const TRUST_PARAMS = {
  // Architecture-specific trust parameters
  // Based on theoretical model, not empirical data
  NT: {
    initialTrust: 0.5,    // Baseline neutral starting point
    learningRate: 0.1,    // Conservative trust updates
    decayRate: 0.05,      // Moderate forgetting
    resonanceThreshold: 0.6, // Moderate compatibility needed
    // Research note: These model theoretical differences, not prescriptive values
  },
  ASD: {
    initialTrust: 0.3,    // More cautious initial stance (research hypothesis)
    learningRate: 0.15,   // Stronger response to consistent patterns
    decayRate: 0.02,      // Longer memory (pattern-focused)
    resonanceThreshold: 0.8, // Higher predictability needs
  },
  ADHD: {
    initialTrust: 0.7,    // More open initial stance (research hypothesis)
    learningRate: 0.2,    // Rapid adaptation
    decayRate: 0.1,       // Quicker forgetting/forgiveness
    resonanceThreshold: 0.4, // Lower threshold, novelty-seeking
  }
};

// RESEARCH DISCLAIMER
const RESEARCH_CONTEXT = {
  purpose: "Simulation parameters for research exploration",
  basis: "Theoretical model for cognitive architecture interactions",
  limitations: "Simplified model for research purposes only",
  interpretation: "Not diagnostic or prescriptive - research tool only"
};


// Trust evolution based on game theory iterative trust model
function calculateTrustEvolution(currentTrust, outcome, architecture) {
  // Basic trust update: T(t+1) = T(t) + α * (outcome - expectation)
  const params = TRUST_PARAMS[architecture];
  const learningRate = params.learningRate;
  const decay = params.decayRate;
  
  // Update based on interaction outcome
  const trustDelta = learningRate * (outcome - currentTrust);
  const decayEffect = -decay * (currentTrust - params.initialTrust);
  
  const newTrust = currentTrust + trustDelta + decayEffect;
  
  // Bound between 0 and 1
  return Math.max(0, Math.min(1, newTrust));
}

// Calculate resonance modulated by trust
function calculateTrustModulatedResonance(agent1, agent2, baseResonance) {
  const trustLevel = agentTrustMatrix[agent1.id][agent2.id] || 0.5;
  
  // Trust acts as a modifier on resonance strength
  // Low trust reduces resonance, high trust amplifies it
  const trustModifier = 0.5 + 0.5 * trustLevel; // Range: 0.5 to 1.0
  
  return {
    resonanceStrength: baseResonance * trustModifier,
    trustLevel: trustLevel,
    modifiedResonance: baseResonance * trustModifier
  };
}

