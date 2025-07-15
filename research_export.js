
// Research data export functionality
function exportTrustData() {
    const data = {
        metadata: {
            timestamp: new Date().toISOString(),
            parameters: TRUST_PARAMS,
            description: "Trust dynamics simulation data - research purposes only"
        },
        trustEvolution: trustEvolutionData,
        finalTrustMatrix: agentTrustMatrix,
        interactionHistory: interactionHistory
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `trust_dynamics_data_${Date.now()}.json`;
    a.click();
}

// Add export button to controls
document.addEventListener("DOMContentLoaded", function() {
    const exportBtn = document.createElement("button");
    exportBtn.textContent = "Export Research Data";
    exportBtn.onclick = exportTrustData;
    exportBtn.style.marginTop = "10px";
    document.querySelector(".trust-panel").appendChild(exportBtn);
});

