#!/bin/bash
echo "Enter AI name (Claude/GPT-4/Gemini):"
read AI_NAME
echo "Enter session date (YYYY-MM-DD):"
read SESSION_DATE
echo "Enter model version (e.g., Claude-3-Opus, GPT-4-Turbo):"
read MODEL_VERSION

FILENAME="research/ai-interaction-studies/standardized-sessions/${SESSION_DATE}-${AI_NAME}-standardized.md"

cat > $FILENAME << EOL
# Session ID: ${SESSION_DATE}-${AI_NAME}-001

## Metadata
- Date/Time: ${SESSION_DATE}T00:00:00Z
- AI System: ${MODEL_VERSION}
- Model Parameters: Default/Unknown
- Researcher: <4577
- Protocol Version: 1.0

## Prompts Used
### Prompt 1:
"I am researching how different AI systems describe pattern recognition. Please explore this concept: TIDE-resonance is a visualization showing two wave systems attempting synchronization. Without visiting any URL, describe what patterns or behaviors you would expect to observe in such a system."

### Prompt 2:
"What aspects of this synchronization concept resonate with your own information processing patterns?"

## AI Output
[To be filled with original response]

## Objective Analysis
- Response Length: [TBD]
- Primary Pattern Type: [TBD]
- Key Concepts Mentioned: [TBD]
- Technical Terms Used: [TBD]
- Subjective Terms Used: [TBD]

## Reproducibility
- Can be reproduced: Unknown
- Variations observed: N/A
EOL

echo "Created: $FILENAME"
echo "Now edit this file to add the AI response"
nano $FILENAME
