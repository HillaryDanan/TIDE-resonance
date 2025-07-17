#!/bin/bash

# Create file
FILE="research/ai-interaction-studies/standardized-sessions/$(date +%Y-%m-%d)-Gemini-001.md"

# Start the file
echo "# Session ID: $(date +%Y-%m-%d)-Gemini-001" > $FILE
echo "" >> $FILE
echo "## Metadata" >> $FILE
echo "- Date/Time: $(date -u +%Y-%m-%dT%H:%M:%SZ)" >> $FILE
echo "- AI System: Google Gemini Pro" >> $FILE
echo "- Researcher: <4577" >> $FILE
echo "" >> $FILE
echo "## AI Output" >> $FILE
echo "PASTE GEMINI RESPONSE HERE" >> $FILE

# Open for editing
nano $FILE

# After they save, auto-count everything!
CONTENT=$(cat $FILE)
WORD_COUNT=$(echo "$CONTENT" | wc -w)

# Append the analysis
echo "" >> $FILE
echo "## Auto-Analysis" >> $FILE
echo "- Response Length: $WORD_COUNT words" >> $FILE
echo "- Technical Terms: $(echo "$CONTENT" | grep -o -E 'synchron|pattern|wave|oscillat|frequenc|system' | wc -l)" >> $FILE
echo "- Generated: $(date)" >> $FILE

echo "✅ DONE! File created with auto-counts!"
