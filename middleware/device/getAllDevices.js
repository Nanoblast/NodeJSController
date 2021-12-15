/**
 * Load all devices from the database using the database
 * The result is saved to res.locals.device
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         res.locals.devices = [
            {
                "name" : 'Device A',
                "type" : "Type A",
                "definition" : "Def A"
            },

            {
                "name" : 'Device B',
                "type" : "Type B",
                "definition" : "Def B"
            },
            {
                "name" : 'Device C',
                "type" : "Type C",
                "definition" : "Def C"
            }
         ];

         return next();
        };
 };