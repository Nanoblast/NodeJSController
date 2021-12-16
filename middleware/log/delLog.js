var requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
       if (typeof res.locals.logs === 'undefined') {
           return next();
       }
       res.locals.logs.remove();

       return res.redirect('/log/edit');
    };
};