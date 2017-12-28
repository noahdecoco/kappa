const mongoose = require('mongoose');
const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const facebookStrategy = require('passport-facebook').Strategy;
const keys = require('../keys');
const User = mongoose.model('users');

const getExistingUser = async query => await User.findOne(query);

const createNewUser = async data => await new User(data).save();

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new googleStrategy(
        {
            clientID: keys.GOOGLE_CLIENT_ID,
            clientSecret: keys.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accesstoken, refreshToken, profile, done) => {
            // Catch errors.
            if (!profile)
            {
                done("Google didn't return a profile.");
            }
            // Handle valid cases.
            const existingUser = await getExistingUser({
                googleId: profile.id
            });
            if (existingUser) return done(null, existingUser);

            const newUser = await createNewUser({
                googleId: profile.id,
                displayName: profile.displayName
            });
            done(null, newUser);
        }
    )
);

passport.use(
    new facebookStrategy(
        {
            clientID: keys.FACEBOOK_APP_ID,
            clientSecret: keys.FACEBOOK_APP_SECRET,
            callbackURL: '/auth/facebook/callback',
            proxy: true
        },
        async (accesstoken, refreshToken, profile, done) => {
            // Catch errors.
            if (!profile)
            {
                done("Facebook didn't return a profile.");
            }
            // Handle valid cases.
            const existingUser = await getExistingUser({
                facebookId: profile.id
            });
            if (existingUser) return done(null, existingUser);

            const newUser = await createNewUser({
                facebookId: profile.id,
                displayName: profile.displayName
            });
            done(null, newUser);
        }
    )
);
