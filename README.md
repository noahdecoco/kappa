# Kappa

A productivity app that combines Personal Kanban with Getting Things Done methodology.

## Local setup
*Note: This project uses the latest Javascript syntax. You will need at minimum `node v8` and `npm v5`  for this project to work. If you have older versions and would like to upgrade, I strongly recommend using [NVM](https://github.com/creationix/nvm) to manage different versions of Node on your machine.*

 1. Clone the repository onto your machine
 2. cd into the project's root directory and run `npm install` to install all the backend modules
 3. cd into the `/client` directory and run `npm install` again to install all the frontend modules

## Keys
This app uses [mLab](https://mlab.com/) as a database service. You will need to create an account and a project and get the database URI.

This app uses [Passport.js](http://www.passportjs.org/) to make signing in with various services easier.

**To use the Google OAuth sign-in service:**
You will need to register your app with Google and get an API key, Client ID and Client Secret. Find out more about that [here](https://developers.google.com/identity/sign-in/web/devconsole-project).

**To use the Facebook OAuth sign-in service:**
You will need to register your app with Facebook and get an App ID and App Secret. Find out more about that [here](https://developers.facebook.com/docs/apps/register).

Once you have all these keys, enter the information in `/keys/index_temp.js` and rename the file to `index.js`. (This file is ignored by git and will not be pushed to the repository).

### Frontend overview

 - React
 - Redux
 - Redux Form
 - Redux Thunk
 - Axios
 - Sass (using node-sass-chokidar as a watcher)

*Note: There are some issues with getting the scss watchers to work on Windows 10. Possibly related to node-sass-chokidar or npm-run-all or concurrently. We are aware of it and we're trying to debug and fix it as soon as possible.*

### Backend overview

 - Node v8
 - Express
 - MongoDB (stored on mLab)
 - OAuth sign-ins (using Passport.js)
