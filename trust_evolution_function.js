
        // Add this function after the agent update functions
        function updateTrustDynamics(agent1, agent2, interactionQuality) {
            if (!agentTrustMatrix[agent1.id]) {
                agentTrustMatrix[agent1.id] = {};
            }
            
            const currentTrust = agentTrustMatrix[agent1.id][agent2.id] || 
                                TRUST_PARAMS[agent1.architecture].initialTrust;
            
            const params = TRUST_PARAMS[agent1.architecture];
            const outcome = interactionQuality > params.resonanceThreshold ? 1 : 0;
            
            // Trust update equation
            const trustDelta = params.learningRate * (outcome - currentTrust);
            const decayEffect = -params.decayRate * (currentTrust - params.initialTrust);
            
            const newTrust = Math.max(0, Math.min(1, currentTrust + trustDelta + decayEffect));
            agentTrustMatrix[agent1.id][agent2.id] = newTrust;
            
            // Track for visualization
            trustEvolutionData.push({
                time: Date.now(),
                agent1: agent1.id,
                agent2: agent2.id,
                architecture1: agent1.architecture,
                architecture2: agent2.architecture,
                trust: newTrust,
                trustDelta: newTrust - currentTrust,
                interactionQuality: interactionQuality
            });
            
            return newTrust;
        }

