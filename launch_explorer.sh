#!/bin/bash
# Launch TIDE-resonance explorer

echo "Launching TIDE-resonance Explorer..."
echo ""
echo "Opening interactive explorer in browser..."
open docs/index.html

echo ""
echo "Starting theoretical analysis..."
python experiments/example_analysis.py
