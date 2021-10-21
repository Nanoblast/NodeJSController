/**
 * Updates device, if can not find in database then creates a new entity.
 * Reditects to /devices after
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         next();
     };
 };