 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     var LogModel = requireOption(objectrepository, 'LogModel');
     return function (req, res, next) {
        if (typeof res.locals.devices === 'undefined') {
            return next();
        }

        res.locals.devices.remove();
        if (typeof res.locals.logs === 'undefined') {
            res.locals.logs = new LogModel();
        }

            res.locals.logs.message = req.params.deviceid + " has been deleted!";
            res.locals.logs.save();

        return res.redirect('/editDevices');
     };
 };