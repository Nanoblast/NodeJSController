var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
    var DeviceModel = requireOption(objectrepository, 'DeviceModel');
    var LogModel = requireOption(objectrepository, 'LogModel'); 
    var update = true;
    return function (req, res, next) {
        if (typeof req.body.name === 'undefined') {
            return next();
        }
        if (typeof res.locals.logs === 'undefined') {
            res.locals.logs = new LogModel();
        }
        if (typeof res.locals.devices === 'undefined') {
            res.locals.devices = new DeviceModel();
            update = false;
        }
        res.locals.devices.name = req.body.name;
        res.locals.devices.type = req.body.type;
        res.locals.devices.definition = req.body.description;
        
        if (update) {
            res.locals.logs.message = (req.body.name + ' registered!');
        } else {
            res.locals.logs.message = (req.body.name + ' registered!');
        }
        res.locals.devices.save();
        res.locals.logs.save();
        return res.redirect('/main');
     };
 };