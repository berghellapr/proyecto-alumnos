const mongoose = require('../db');

const rolSchema = mongoose.Schema({
    nombre: {type: String},
},{
    versionKey: false
}, {collection: 'Role'})

module.exports = mongoose.model('Role', rolSchema)