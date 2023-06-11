const mongoose = require('../db');

const alumnoSchema = mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    dni: { type: Number, required: true, unique: true},
    direccion:{
        calle: { type: String, required: true},
        numero: { type: Number, required: true},
        codigo_postal: { type: String, required: true}
        },
    tutor: { type: String, required: true},
    genero: { type: String, required: true}
},{
    timestamps : true,
    versionKey: false
}, {collection: "Alumnos"})

module.exports = mongoose.model('Alumnos', alumnoSchema)
