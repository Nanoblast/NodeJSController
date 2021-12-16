/**
 * Returns all logs from database
 * The result is saved to res.locals.device
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    var LogModel = requireOption(objectrepository, 'LogModel');
    return function (req, res, next) {
       LogModel.find({}, (err, logs) => {
           res.locals.logs = logs;
           return next();
       });
   };
 };