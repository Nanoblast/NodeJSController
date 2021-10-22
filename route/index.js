var authMW = require('../middleware/auth/authMW');
var checkPassMW = require('../middleware/auth/checkPassMW');
var renderMW = require('../middleware/renderMW');
var detDevice = require('../middleware/befott/detDevice');
var getAllDevices = require('../middleware/befott/getAllDevices');
var getLog = require('../middleware/befott/getLog');
var saveDevice = require('../middleware/befott/saveDevice');
var delDevice = require('../middleware/nagymama/delDevice');
var getLog = require('../middleware/nagymama/getLog');
var getAllLogs = require('../middleware/nagymama/getAllLogs');

module.exports = function (app) {
    var objRepo = {};

    app.use('/',
        getAllDecies(objRepo),
        checkPassMW(objRepo),
        renderMW(objRepo, 'index'));
    app.use('/device/new',
        authMW(objRepo),
        saveDevice(objRepo),
        renderMW(objRepo, 'devicenew'));
    app.use('/device/edit/:deviceid',
        authMW(objRepo),
        getDevice(objRepo),
        saveDevice(objRepo),
        renderMW(objRepo, 'devicenew'));
    app.get('/device/del/:deviceid',
        authMW(objRepo),
        getDevice(objRepo),
        delDevice(objRepo));
    app.use('/log/:logid',
        authMW(objRepo),
        getLog(objRepo),
        renderMW(objRepo, 'logidnew'));
};