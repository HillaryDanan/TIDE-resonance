
// Add trust visualization panel
function createTrustVisualization() {
  const trustPanel = document.createElement("div");
  trustPanel.id = "trust-panel";
  trustPanel.innerHTML = `
    <h3>Trust Dynamics (Research Simulation)</h3>
    <p class="disclaimer">Simulation values for research exploration</p>
    <canvas id="trust-graph" width="300" height="200"></canvas>
    <div id="trust-metrics">
      <p>Current Trust: <span id="current-trust">0.50</span></p>
      <p>Trust Velocity: <span id="trust-velocity">0.00</span></p>
      <p>Resonance Modifier: <span id="resonance-modifier">1.00x</span></p>
    </div>
  `;
  document.getElementById("controls").appendChild(trustPanel);
}

// Update trust graph in animation loop
function updateTrustGraph() {
  const ctx = document.getElementById("trust-graph").getContext("2d");
  // Add your graph drawing code here
  // Show trust evolution over time for current agent pair
}

