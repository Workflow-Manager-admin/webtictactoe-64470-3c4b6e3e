#!/bin/bash
cd /home/kavia/workspace/code-generation/webtictactoe-64470-3c4b6e3e/webtictactoe
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

