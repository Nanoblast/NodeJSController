const Schema = require('mongoose').Schema;
const bd = require('../config/d');

const Device = db.model('Device', {
    name: String,
    type: String,
    definition: String
    
});

module.exports = Device;