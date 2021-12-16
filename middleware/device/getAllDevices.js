 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     var DeviceModel = requireOption(objectrepository, 'DeviceModel');
     return function (req, res, next) {
        DeviceModel.find({}, (err, devices) => {
            res.locals.devices = devices;
            return next();
        });
    };
 };