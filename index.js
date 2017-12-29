const PORT = process.env.PORT || 5000;

const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

const keys = require('./keys');

mongoose.connect(keys.MONGO_URI, { useMongoClient: true });

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.COOKIE_KEY]
    })
);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./models/User');
require('./models/Task');

require('./services/passport');
require('./routes/auth-routes')(app);
require('./routes/tasks-routes')(app);

app.get('/', (req, res) => {
    res.send('logged in');
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});
