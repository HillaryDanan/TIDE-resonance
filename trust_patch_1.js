// Add this after line with "agents = ["
        
        // TRUST DYNAMICS PARAMETERS (Research Simulation)
        const TRUST_PARAMS = {
            NT: { initialTrust: 0.5, learningRate: 0.1, decayRate: 0.05, resonanceThreshold: 0.6 },
            ASD: { initialTrust: 0.3, learningRate: 0.15, decayRate: 0.02, resonanceThreshold: 0.8 },
            ADHD: { initialTrust: 0.7, learningRate: 0.2, decayRate: 0.1, resonanceThreshold: 0.4 }
        };
        let agentTrustMatrix = {};
        let trustHistory = [];
