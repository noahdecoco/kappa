const passport = require('passport');

module.exports = app => {
    app.get(
        '/auth/google',
        passport.authenticate('google', { scope: ['profile', 'email'] })
    );

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get(
        '/auth/facebook/callback',
        passport.authenticate('facebook'),
        (req, res) => {
            res.redirect('/');
        }
    );

    app.get('/api/current-user', (req, res) => {
        if (!req.user) 
        {
            return res.redirect('/');
        }
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
};
