var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    var LogModel = requireOption(objectrepository, 'LogModel'); 
    return function (req, res, next) {
        if (typeof req.body.message === 'undefined') {
            return next();
        }
        if (typeof res.locals.logs === 'undefined') {
            return next();
        }
        res.locals.logs.message = req.body.message;
        res.locals.logs.save();
       return res.redirect('/main');
     };
 };