#!/bin/bash

echo "Connecting to lc@206.81.21.127 via ssh."
ssh lc@206.81.21.127 'cd /home/lc/backend/learning-cards;
git pull;
arg='"$1"'
if [[ $arg == "run" ]]; then
    cd /home/lc/backend/learning-cards/backend/venv/bin;
    source activate; cd ../..;
    python3 manage.py runserver 206.81.21.127:8000;
    cd /home/lc/backend/learning-cards;
    tail -f debug.log;
fi;'
