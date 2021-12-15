/**
 * If the user is authenticated, call next, otherwise redirect to /
 */
 var requireOption = require('../requireOption');

 module.exports = function (objectrepository) {
     return function (req, res, next) {

         return next();
     };
 };