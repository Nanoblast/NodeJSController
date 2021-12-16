/**
 * Load a device from the database using the :deviceid param
 * The result is saved to res.locals.device
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    var DeviceModel = requireOption(objectrepository, 'DeviceModel');

    return function(req, res, next) {
        DeviceModel.findOne({ _id: req.params.deviceid }, (err, device) => {
            if (err || !device) {
                return next(err);
            }
            res.locals.devices = device;
            return next();
        });
    };
 };