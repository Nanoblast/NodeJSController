/**
 * Check the password (from POST), if it's the right one, create a session for the user and redirect to /main
 */
var requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        next();
    };
};