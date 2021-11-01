var authMW = require('../middleware/auth/authMW');
var checkPassMW = require('../middleware/auth/checkpwMW');
var renderMW = require('../middleware/renderMW');
var delDevice = require('../middleware/device/delDevice');
var getDevice = require('../middleware/device/getDevice');
var getAllDevices = require('../middleware/device/getAllDevices');
var getLog = require('../middleware/log/getLog');
var saveDevice = require('../middleware/device/saveDevice');
var getLog = require('../middleware/log/getLog');
var getAllLogs = require('../middleware/log/getAllLogs');

module.exports = function (app) {
    var objRepo = {};

    app.get('/',
        authMW(objRepo),
        checkPassMW(objRepo),
        renderMW(objRepo, 'login'));
    app.get('/main',
        authMW(objRepo),
        checkPassMW(objRepo),
        getAllDevices(objRepo),
        renderMW(objRepo, 'index'));
    app.get('/editDevices',
        authMW(objRepo),
        checkPassMW(objRepo),
        getAllDevices(objRepo),
        renderMW(objRepo, 'devices'));
    app.use('/device/new',
        authMW(objRepo),
        saveDevice(objRepo),
        getAllDevices(objRepo),
        renderMW(objRepo, 'devices'));
    app.use('/device/edit/:deviceid',
        authMW(objRepo),
        getDevice(objRepo),
        saveDevice(objRepo),
        renderMW(objRepo, 'devicenew'));
    app.use('/device/del/:deviceid',
        authMW(objRepo),
        getDevice(objRepo),
        delDevice(objRepo),
        getAllDevices(objRepo),
        renderMW(objRepo, 'devices'));
    app.use('/log/:logid',
        authMW(objRepo),
        getLog(objRepo),
        renderMW(objRepo, 'logidnew'));
};