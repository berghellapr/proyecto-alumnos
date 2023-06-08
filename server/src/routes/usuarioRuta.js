const express = require('express');
const usuarioRuta = express.Router();
const {signUp, signIn} = require('../controllers/login.controller');

usuarioRuta.post("/signup", signUp );

usuarioRuta.post("/login", signIn);




module.exports =  usuarioRuta ; 