#!/bin/bash

echo "🤖 Quick Session Adder"
echo ""
echo "Which AI? (1=Claude, 2=GPT-4, 3=Other)"
read AI_CHOICE

case $AI_CHOICE in
    1) AI="Claude"; FOLDER="claude-sessions" ;;
    2) AI="GPT-4"; FOLDER="gpt4-sessions" ;;
    3) AI="Other"; FOLDER="other-ai-sessions" ;;
esac

TIMESTAMP=$(date +%Y%m%d-%H%M%S)
FILE="research/ai-interaction-studies/raw-data/$FOLDER/$AI-$TIMESTAMP.md"

echo "# Session: $AI-$TIMESTAMP" > $FILE
echo "Date: $(date)" >> $FILE
echo "AI: $AI" >> $FILE
echo "" >> $FILE
echo "## Response" >> $FILE
echo "[Paste response manually]" >> $FILE
echo "" >> $FILE
echo "Pattern: [Add manually]" >> $FILE

echo "✅ Created: $FILE"
echo "Now edit this file and add the AI response!"
echo ""
echo "Opening nano editor..."
sleep 1

nano $FILE
