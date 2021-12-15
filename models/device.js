const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Device = db.model('Device', {
    name: String,
    type: String,
    definition: String
    
});

module.exports = Device;    