
        // Find the updateAgents function and add this inside it
        // After calculating base resonance, apply trust modulation
        
        // Inside the agent interaction loop, add:
        if (displayMode === "resonance" && i !== j) {
            const baseResonance = calculateResonance(agent, otherAgent);
            const trustModifier = getTrustModifier(agent, otherAgent);
            const modulatedResonance = baseResonance * trustModifier;
            
            // Update trust based on interaction
            updateTrust(agent, otherAgent, modulatedResonance);
            
            // Use modulated resonance for display
            agent.resonance = modulatedResonance;
        }
