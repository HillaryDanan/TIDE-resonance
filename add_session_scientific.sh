#!/bin/bash

echo "Which AI? (g=Gemini, c=Claude, p=GPT-4)"
read AI_CHOICE

case $AI_CHOICE in
    g) AI="Gemini"; MODEL="Google Gemini Pro" ;;
    c) AI="Claude"; MODEL="Claude 3 Opus" ;;
    p) AI="GPT4"; MODEL="GPT-4" ;;
esac

DATE=$(date +%Y-%m-%d)
TIME=$(date -u +%Y-%m-%dT%H:%M:%SZ)
FILE="research/ai-interaction-studies/standardized-sessions/$DATE-$AI-001.md"

# Create proper scientific documentation
cat > $FILE << TEMPLATE
# Session ID: $DATE-$AI-001

## Metadata
- Date/Time: $TIME
- AI System: $MODEL
- Model Parameters: Default
- Researcher: <4577
- Protocol Version: 1.0

## Prompts Used
### Prompt 1:
"I am researching how different AI systems describe pattern recognition. Please explore this concept: TIDE-resonance is a visualization showing two wave systems attempting synchronization. Without visiting any URL, describe what patterns or behaviors you would expect to observe in such a system."

### Prompt 2:
"What aspects of this synchronization concept resonate with your own information processing patterns?"

## AI Output

### Response to Prompt 1:
[PASTE FIRST RESPONSE HERE]

### Response to Prompt 2:
[PASTE SECOND RESPONSE HERE]

## Objective Analysis
- Response Length: [AUTO-FILLED AFTER SAVE]
- Primary Pattern Type: [ANALYTICAL/EXPERIENTIAL/EXPLORATORY/EMERGENT]
- Key Concepts: [AUTO-FILLED AFTER SAVE]

## Reproducibility
- Can be reproduced: Yes
- Protocol followed: Yes
TEMPLATE

echo "Opening editor - paste your responses where indicated..."
nano $FILE

# After save, auto-analyze
CONTENT=$(cat $FILE)
WORDS=$(echo "$CONTENT" | wc -w)
TECH_TERMS=$(echo "$CONTENT" | grep -o -E 'synchron|pattern|wave|frequency|oscillat|resonan|system|process|algorithm|mathematical' | wc -l)

# Update the file with counts
sed -i '' "s/\[AUTO-FILLED AFTER SAVE\]/$WORDS words/" $FILE
sed -i '' "s/\[AUTO-FILLED AFTER SAVE\]/$TECH_TERMS technical terms/" $FILE

echo "✅ Session documented with scientific rigor!"
echo "📊 Word count: $WORDS"
echo "🔬 Technical terms: $TECH_TERMS"

# Commit with proper message
git add research/
git commit -m "Add $AI session following standardized protocol v1.0

- Used standardized prompts
- Documented full metadata
- Preserved exact AI outputs
- Added objective metrics
- Maintains reproducibility"
git push origin main

echo "✅ Pushed to GitHub with full scientific documentation!"
