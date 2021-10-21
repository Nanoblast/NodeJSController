/**
 * Creates log from POST
 *
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {
         next();
     };
 };