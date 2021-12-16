/**
 * Updates devices, if can not find in database then creates a new entity.
 * Reditects to /devices after
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    var LogModel = requireOption(objectrepository, 'LogModel'); 
    return function (req, res, next) {
        if (typeof res.locals.logs === 'undefined') {
            return next();
        }
        var id = res.locals.logs._id;
        res.locals.logs.message = req.body.message;
        res.locals.logs.save();

        res.locals.logs = new LogModel();
        res.locals.logs.message = id + " log was updated!"
        return res.redirect('/logs');
     };
 };