/*
chequear si tienen token, si es admin o user
"funciona como autorizacion"
*/
const jwt = require('jsonwebtoken');
const {SECRET} = require('../config');
const UserDB = require('../models/User')
const RoleDB = require('../models/Role');


const verificarToken = async (req, res, next) => {
  try {
    const token = req.headers['x-access-token']
    
  if (!token) return res.status(403).json({message : "NO EXISTE TOKEN"});

  const decodificado = jwt.verify(token, SECRET );
  req.usuarioID = decodificado.id;
  const usuario = await UserDB.findById(req.usuarioID, {password : 0});
  if (!usuario) return res.status(404).json({message: 'no user found'});
 
  next();
  } catch (error) {
        return res.status(500).json({message: 'no autorizado'})
  }
}


const isAdmin = async (req, res, next) => {

  const usuario = await UserDB.findById(req.usuarioID);
  const roles = await RoleDB.find({_id: {$in : usuario.roles}})

  for (i = 0; i < roles.length; i++){
    if(roles[i].nombre == 'admin'){
      next();
      return;
    }
  }
return res.status(403).json({message: "requiere ser ADMIN !"})

}


module.exports = {verificarToken, isAdmin}