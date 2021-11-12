const Schema = require('mongoose').Schema;
const bd = require('../config/d');

const Log = db.model('Log', {  
    timestamp: Number,
    message: String,
});

module.exports = Log;