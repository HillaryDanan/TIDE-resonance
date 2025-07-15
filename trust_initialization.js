
// Initialize trust matrix for agent interactions
let agentTrustMatrix = {};

// Initialize trust tracking
function initializeTrustMatrix() {
    agentTrustMatrix = {};
    agents.forEach(agent1 => {
        agentTrustMatrix[agent1.id] = {};
        agents.forEach(agent2 => {
            if (agent1.id !== agent2.id) {
                // Set initial trust based on architecture pairing
                const initialTrust = TRUST_PARAMS[agent1.architecture].initialTrust;
                agentTrustMatrix[agent1.id][agent2.id] = initialTrust;
            }
        });
    });
}

// Research metrics tracking
let trustEvolutionData = [];
let interactionHistory = [];

