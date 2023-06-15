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

