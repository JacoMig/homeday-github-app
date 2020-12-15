# Homeday fetching github public repos by username

### Basic instructions
* git clone git@github.com:JacoMig/homeday-github-app.git 
* cd homeday-github-app
* npm i
* npm run start
* Open [http://localhost:3008](http://localhost:3008) 


### Description

Views:
* You have a button that leads you to the next page. You see the top 3 stars public repos from homeday-de
* Form. All fields are required. Next button and Fetch button will leads you to next page only if the form has been complited correctly.
* User page it gonna fetch all the repos of the user you choosed. You can click on a repo to go to the detail page

### Tests

This app has been tested with cypress

### Available Scripts

In the project directory, you can run:

#### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3008](http://localhost:3008) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run cy:open`

Launches the cypress gui. Choose from that window which test you want to run

### `npm run cy:run`

Launches the tests in the terminal

--------------------------------
(This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app))


