const UserDB = require ('../models/User');
const RoleDB = require('../models/Role');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');
const {encrypt, compare}  = require('../helpers/encriptado');

const signUp = async (req, res) => {

    const {nombre, apellido, dni, email, password, roles} = req.body;
    const contraseñaHash = await encrypt (password) ; 
    //const roles = req.body.roles ;
    const newUser = new UserDB({
      nombre,
      apellido,
      dni,
      email,
      password: contraseñaHash
    })
      
    if(roles){
      const rolEncontrado = await RoleDB.find({nombre : {$in: roles}})
      newUser.roles = rolEncontrado.map(role => role._id);
    }else{
      const role = await RoleDB.findOne({nombre: "user"})
      newUser.roles =  [role._id];
    }

 const savedUser = await newUser.save();

 const token = jwt.sign({id: savedUser._id}, SECRET , {
          expiresIn: 86400 //24 horas
 }) 

    res.status(200).json({token});
}


const signIn = async (req, res) => {

  const userEncontrado = await UserDB.findOne({email : req.body.email}).populate('roles');
  console.log(userEncontrado)
  if(!userEncontrado) return res.status(400).json({msg : 'No existe EMAIL registrado'})

  const checkContraseña = await compare(req.body.password, userEncontrado.password);
  
  if(!checkContraseña) return res.status(400).json({token : null, msg: 'Pass invalida'});

  const token = jwt.sign({id: userEncontrado._id}, SECRET , {
          expiresIn: 86400 //24 horas
 }) 
 
    res.status(201).json({token})
}

module.exports = { signUp, signIn}