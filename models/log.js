const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Log = db.model('Log', {  
    timestamp: Number,
    message: String,
});

module.exports = Log;