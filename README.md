# learning-cards
[![CircleCI](https://circleci.com/gh/KamilKrol5/learning-cards.svg?style=svg&circle-token=9ad2efaddf08dcc4fe8f867087f7614342409265)](https://circleci.com/gh/KamilKrol5/learning-cards)

A simple web application which helps learning using flashcards.  
API description can be found here: https://github.com/KamilKrol5/learning-cards/blob/master/backend/API_description.md
### Technologies
* Python 3.7,
* Django 2.2.20 and Django REST Framework 3.12.4,
* React with Redux,
* Bootstrap 4.4.1,
* JWT authentication.
### How to run?
##### Backend - Django application

1. Install python 3.7.
    ```shell script
    $ sudo apt-get update
    $ sudo apt install python3.7
    ```
2. Install pip for Python 3.
    ```shell script
    $ sudo apt-get install python3-pip
    ```
3. Install requirements.
    ```shell script
    $ sudo python3.7 -m pip install -r backend/requirements.txt
    ```
4. Create migrations and make migrations.
    ```shell script
    $ python3.7 backend/manage.py makemigrations
    $ python3.7 backend/manage.py migrate
    ```
5. Run Django development server (not for production purposes).
    ```shell script
    $ python3.7 backend/manage.py runserver 8000
    ```
##### Frontend - React application 
1. Install NodeJS
2. Enter 'front' directory and initialize project.
    ```shell script
   $ cd front
   $ npm install
    ```
3. Start React application
   ```shell script
   $ npm start
   ```
### Screenshots
Start page:   
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/Screenshot_1.png)
Registering new user. The password has to be at least 8 characters long and is stored in hashed form in DB:   
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/learning-cards-register.png)
Main user panel - after logging in:
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/learning-cards-after-login-panel.png)
Creating new learning set named "Trees". Empty sets are allowed:
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/learning-cards-adding-new-set.png)
Viewing "Trees" set. A user can choose between two modes to learn the definitions from this set:
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/learning-cards-set-view.png)
Editing "Trees" learning set. Every item can be removed, changed or deleted. The set name is also changeable:
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/learning-cards-editing-set.png)
"Flashcard" (first) learning mode. User can see all flashcards in the set one by one:
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/learning-cards-learning-mode-cards.png)
"Writing" (second) learning mode. User needs to write the definition in the field. If the answer is not correct, the card will apear again while learning. Statistics can be seen at the bottom:
![Screenshot](https://github.com/KamilKrol5/learning-cards/blob/master/screenshots/learning-cards-learning-mode-writing.png)
