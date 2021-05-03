# Would You Rather Project

This is project was submitted as the second project for the Udacity Nanodegree programme.

The App let's you play the Would You Rather game, where you are asked to pick one of two options for a number of user asked questions.

The app has a mock authentication system to allow you act as a particular user. This system protects all application routes and ensures that you must login to use the app.

NB: no password is required, just pick a user and sign in.

You can create questions, answer questions both questions you asked and those asked by other users.

You can view already answered questions and see how you voted and the percentage of users who voted for each answer.

The app also has a leaderboard which shows the user with the most created and answered questions.

## Setup

To use the application you would have to have npm and or yarn installed, the application can be installed in one of two ways

* npm
* yarn

### npm

To use npm simply type `npm install` this will install all the project dependencies.

Next run `npm start` to run the application local server and visit http://localhost:3000 to start playing your game.

### yarn

To use yarn simply type `yarn install` as in above, this will install a project dependencies.

Then run `yarn start` to run the application, visit http://localhost:3000 to start enjoying the game.

## Playing the game

### Home
Once the application is loaded, select a user to sign in.

Next you will be taken to the application home page, where you'll see a listing of all available questions on the app, the questions are grouped into two Unanswered and Answered Questions.

As the names suggest, Unanswered Questions show questions that you have not answered while the Answered Questions show questions that you have answered.

Click on the View Poll button to either go vote an unanswered question or view the result of an answered question.

To vote simply select the option you prefer and and click Submit.

### New Question
Here you can create questions that'll be available for any user to answer.

Type in the questions for option 1 and option 2 in the provided input boxes, once you are satisfied with your question click on submit to save your question. You will be redirected to the home page where your newly added question will be visible in the Unanswered Questions tab.

### Leader Board
Here you can view the ranking for all users on the platform, users are ranked based on the number of questions and answers they have provided on the application. They are ranked from the highest scoring to the lowest, as you add questions and answer questions your ranking will change on the application.