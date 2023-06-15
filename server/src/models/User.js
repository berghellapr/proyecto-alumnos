const mongoose = require('../db');
const bcrypt = require ('bcryptjs');

const usuarioSchema = mongoose.Schema({
  nombre :{type: String, required: true},
  apellido :{type: String, required: true},
  dni: {type: Number, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  roles:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }]
},{
  timestamps : true,
   versionKey: false
}
,{collection: "Usuarios"})

module.exports = mongoose.model('Usuarios', usuarioSchema);