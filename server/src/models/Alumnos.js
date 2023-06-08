const mongoose = require('../db');

const alumnoSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    dni: { type: Number, required: true, unique: true},
    tutor : { type: String, required: true}
},{
    timestamps : true,
    versionKey: false
}, {collection: "Alumnos"})

module.exports = mongoose.model('Alumnos', alumnoSchema)
