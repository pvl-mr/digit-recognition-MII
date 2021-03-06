## _Установка на Ubuntu_
# 1. Обновление репозиториев Ubuntu
```sh
sudo apt update
sudo apt upgrade 
```
# 2. Установка nodejs c npm (node package manager)
```sh
sudo apt install curl
curl -sL https://deb.nodesource.com/setup_16wget.x | sudo bash -
sudo apt install -y nodejs
sudo npm install -g npm@2.8.0 
```
# 3. Установка serve для запуска сервера на localhost из под root
```sh
sudo su
npm install -g serve
exit
```
# 4. Установка git
```sh
sudo apt install -y git 
```

# 5. Установка pip (package installer for Python)
```sh
sudo apt install -y python3-pip
pip install --upgrade pip
sudo apt install python3.8-venv
```

# 6. Клонирование репозитория
```sh
git clone https://github.com/pvl-mr/digit-recognition-MII
```

# 7. Запуск react-app (фронт)
```sh
cd digit-recognition-MII
npm i
npm run build
serve -l 3000 -s build
```
 
# 8. Создание виртуального окружения
```sh
python -m venv env
```

# 9. Активация виртуального окружения
```sh
sourse ./env/bin/activate
```

# 10. Установка необходимых пакетов
```sh
pip install -r requirements.txt
```

# 11. Запуска сервера (бэк)
```sh
python src/manage.py runserver
```

## _Результат_
- Сервер будет запущен по адресу: https://localhost:8000
- Приложение react будет запущено по адресу https://localhost:3000

## _Cоздание сервиса для запуска серверов после перезагрузки машины_
Используются 2 файла:
- runservers.service - сервис для запуска скрипта, после каждой перезагрузки машины
- run_scripts.sh - скрипт, запускающий сервера
# 0. В скрипте используется ссылка /home/mariya...надо заменить имя пользователя 

# 1. Сделать скрипт исполняемым
```sh
chmod a+x run_scripts.sh
```
# 2. Переместить скрипт в /etc
```sh
sudo mv run_scripts.sh /etc
```

# 3. Переместить сервис в /etc/systemd/system
```sh
sudo mv runservers.service /etc/systemd/system
```

# 4. Запустить сервис
```sh
cd /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl enable runservers.service
sudo systemctl start runservers.service
```
Последняя команда не завершится, нужно выйти Ctrl+C
