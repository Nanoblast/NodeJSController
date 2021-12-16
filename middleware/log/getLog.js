/**
 * Gets a log from the database using the :logid param
 * The result is saved to res.locals.device
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    var LogModel = requireOption(objectrepository, 'LogModel');
    return function(req, res, next) {
        LogModel.findOne({ _id: req.params.logid }, (err, log) => {
            if (err || !log) {
                return next(err);
            }

            res.locals.logs = log;
            return next();
        });
    };
 };