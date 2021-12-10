!/bin/bash
cd /home/mariya/digit-recognition-MII/classify
source ./env/bin/activate
python3 src/manage.py runserver&
cd ../draw-app
serve -l 3000 -s build &
