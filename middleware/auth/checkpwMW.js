/**
 * Check the password (from POST), if it's the right one, create a session for the user and redirect to /main
 */
var requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }

        if (req.body.password === '123') {
            return res.redirect('/main');
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};
