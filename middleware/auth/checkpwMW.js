var requireOption = require('../requireOption');

module.exports = function(objectrepository) {
    return function(req, res, next) {
        if (typeof req.body.password === 'undefined') {
            return next();
        }
        if (req.body.password === '123') {

            req.session.belepve = true;
            req.session.save();
            return res.redirect('/main');
        }

        res.locals.error = 'Hibás jelszó!';
        return next();
    };
};
