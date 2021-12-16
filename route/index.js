var authMW = require('../middleware/auth/authMW');
var checkPassMW = require('../middleware/auth/checkpwMW');
var renderMW = require('../middleware/renderMW');
var delDevice = require('../middleware/device/delDevice');
var getDevice = require('../middleware/device/getDevice');
var getAllDevices = require('../middleware/device/getAllDevices');
var saveDevice = require('../middleware/device/saveDevice');
var getLog = require('../middleware/log/getLog');
var getAllLogs = require('../middleware/log/getAllLogs');
var delLog = require('../middleware/log/delLog')

var DeviceModel = require("../models/device");
var LogModel = require("../models/log");
const req = require('express/lib/request');
module.exports = function(app) {
    var objRepo = {
        DeviceModel: DeviceModel,
        LogModel : LogModel
    };

    app.get('/main',
        authMW(objRepo),
        getAllDevices(objRepo),
        getAllLogs(objRepo),
        renderMW(objRepo, 'index'));
    app.get('/editDevices',
        authMW(objRepo),
        getAllDevices(objRepo),
        renderMW(objRepo, 'devices'));
    app.use('/device/new',
        authMW(objRepo),
        saveDevice(objRepo),
        getAllDevices(objRepo),
        renderMW(objRepo, 'devicenew'));
    app.use('/device/edit/:deviceid',
        authMW(objRepo),
        getDevice(objRepo),
        saveDevice(objRepo),
        renderMW(objRepo, 'devicenew'));
    app.get('/device/del/:deviceid',
        authMW(objRepo),
        getDevice(objRepo),
        delDevice(objRepo),
        getAllDevices(objRepo),
        renderMW(objRepo, 'devices'));
    app.get('/log/edit',
        authMW(objRepo),
        getAllLogs(objRepo),
        renderMW(objRepo, 'logs'));
    app.get('/log/delete/:logid',
        authMW(objRepo),
        getLog(objRepo),
        delLog(objRepo),
        renderMW(objRepo, 'logs'));
    app.use('/',
        checkPassMW(objRepo),
        renderMW(objRepo, 'login'));
};