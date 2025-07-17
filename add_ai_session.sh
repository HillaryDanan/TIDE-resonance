#!/bin/bash

# Colors for fun
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}🤖 TIDE-Resonance AI Session Recorder${NC}"
echo ""

# Ask which AI
echo "Which AI did you test with?"
echo "1) Claude"
echo "2) GPT-4"
echo "3) Gemini"
echo "4) Other"
read -p "Enter number: " AI_CHOICE

# Set folder based on choice
case $AI_CHOICE in
    1) AI_NAME="Claude"; FOLDER="claude-sessions" ;;
    2) AI_NAME="GPT-4"; FOLDER="gpt4-sessions" ;;
    3) AI_NAME="Gemini"; FOLDER="other-ai-sessions" ;;
    4) read -p "Enter AI name: " AI_NAME; FOLDER="other-ai-sessions" ;;
esac

# Create filename
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
FILENAME="research/ai-interaction-studies/raw-data/$FOLDER/$AI_NAME-$TIMESTAMP.md"

# Create session file
echo "# Session: $(date +%Y-%m-%d)-$AI_NAME-$TIMESTAMP" > $FILENAME
echo "" >> $FILENAME
echo "Date: $(date)" >> $FILENAME
echo "AI: $AI_NAME" >> $FILENAME
echo "Researcher: <4577" >> $FILENAME
echo "" >> $FILENAME

# Get the response
echo -e "${GREEN}Paste the AI's response (press Ctrl+D when done):${NC}"
echo "## AI Response" >> $FILENAME
cat >> $FILENAME
echo "" >> $FILENAME

# Ask for pattern
echo ""
echo "What pattern did you observe?"
echo "1) ANALYTICAL (math/technical focus)"
echo "2) EXPERIENTIAL (emotional/subjective)"
echo "3) EXPLORATORY (what-if questions)"
echo "4) EMERGENT (unexpected insights)"
echo "5) HYBRID (combination)"
read -p "Enter number: " PATTERN_CHOICE

case $PATTERN_CHOICE in
    1) PATTERN="ANALYTICAL" ;;
    2) PATTERN="EXPERIENTIAL" ;;
    3) PATTERN="EXPLORATORY" ;;
    4) PATTERN="EMERGENT" ;;
    5) PATTERN="HYBRID" ;;
esac

echo "## Pattern Observed" >> $FILENAME
echo "$PATTERN" >> $FILENAME

# Update stats
CLAUDE_COUNT=$(ls research/ai-interaction-studies/raw-data/claude-sessions/*.md 2>/dev/null | wc -l)
GPT_COUNT=$(ls research/ai-interaction-studies/raw-data/gpt4-sessions/*.md 2>/dev/null | wc -l)
OTHER_COUNT=$(ls research/ai-interaction-studies/raw-data/other-ai-sessions/*.md 2>/dev/null | wc -l)
TOTAL=$((CLAUDE_COUNT + GPT_COUNT + OTHER_COUNT))

echo "# Research Stats" > research/STATS.md
echo "" >> research/STATS.md
echo "Last Updated: $(date)" >> research/STATS.md
echo "" >> research/STATS.md
echo "Total Sessions: $TOTAL" >> research/STATS.md
echo "- Claude: $CLAUDE_COUNT" >> research/STATS.md
echo "- GPT-4: $GPT_COUNT" >> research/STATS.md
echo "- Others: $OTHER_COUNT" >> research/STATS.md

# Git operations
echo -e "${BLUE}Pushing to GitHub...${NC}"
git add research/
git commit -m "Add $AI_NAME session $TIMESTAMP - Pattern: $PATTERN"
git push origin main

echo -e "${GREEN}✅ Session recorded and pushed!${NC}"
echo -e "${GREEN}📊 Total sessions now: $TOTAL${NC}"
