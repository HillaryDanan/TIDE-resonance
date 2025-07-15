
        // Trust dynamics functions
        function initializeTrustMatrix() {
            agentTrustMatrix = {};
            agents.forEach(agent1 => {
                agentTrustMatrix[agent1.id] = {};
                agents.forEach(agent2 => {
                    if (agent1.id !== agent2.id) {
                        const initial = TRUST_PARAMS[agent1.architecture].initialTrust;
                        agentTrustMatrix[agent1.id][agent2.id] = initial;
                    }
                });
            });
        }

        function updateTrust(agent1, agent2, resonanceQuality) {
            const params = TRUST_PARAMS[agent1.architecture];
            const currentTrust = agentTrustMatrix[agent1.id][agent2.id] || params.initialTrust;
            
            // Trust evolution based on interaction success
            const success = resonanceQuality > params.resonanceThreshold ? 1 : 0;
            const trustDelta = params.learningRate * (success - currentTrust);
            const decay = -params.decayRate * (currentTrust - params.initialTrust);
            
            const newTrust = Math.max(0, Math.min(1, currentTrust + trustDelta + decay));
            agentTrustMatrix[agent1.id][agent2.id] = newTrust;
            
            // Track history
            trustHistory.push({
                time: Date.now(),
                agent1: agent1.id,
                agent2: agent2.id,
                trust: newTrust,
                resonance: resonanceQuality
            });
            
            return newTrust;
        }

        function getTrustModifier(agent1, agent2) {
            if (!agentTrustMatrix[agent1.id]) return 1.0;
            const trust = agentTrustMatrix[agent1.id][agent2.id] || 0.5;
            return 0.5 + 0.5 * trust; // Range: 0.5x to 1.0x
        }
