#!/bin/zsh
kill $(lsof -ti:3000) 2>/dev/null
sleep 1
cd /Users/rian/Desktop/阿里/qoder/rian-s-test/vengeui-demo
npm run dev
