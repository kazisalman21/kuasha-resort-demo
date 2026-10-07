#!/bin/bash
pkill -f "http.server 4321" 2>/dev/null; cd /home/claude/kuasha/dist && nohup python3 -m http.server 4321 >/dev/null 2>&1 &
sleep 1; echo served
