const express = require('express');
const app = express();
const cors = require('cors');
const cookieparser = require('cookie-parser');
require('dotenv').config()
const PORT = process.env.PORT || 3000 ; 
const alumnosRuta = require('./routes/alumnosRuta');
const usuarioRuta = require('./routes/usuarioRuta');
const {createAdmin, createRoles} = require('./inicialSetup');


app.use(cookieparser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors ({
  origin: [""],
  methods: ["POST, GET"],
  credentials: true
}))

//una vez ejecutada la app crear roles por defecto
createRoles();
app.use(alumnosRuta);
app.use(usuarioRuta);


app.listen(PORT, () => {
        console.log ("todo ok");
});

//nodemon --exec npm start para nodemon por si no quiere funcionar.


//REPO DE AYUDA https://github.com/FaztWeb/company-products-api/blob/master/src/controllers/products.controller.js
// YO AYUDA https://www.youtube.com/watch?v=lV7mxivGX_I&t=1659s
