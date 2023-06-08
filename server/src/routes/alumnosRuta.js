const express = require('express');
const alumnosRouter = express.Router();
const {getAlumno, getAlumnoById, crearAlumno, upDateAlumno, deleteAlumno } = require('../controllers/alumnos.controller');
const {verificarToken, isAdmin} = require('../middlewares/authJwt')

alumnosRouter.get("/", getAlumno);

//alumnosRouter.get("/:productId", getAlumnoById);

alumnosRouter.get('/mostraralumnos', getAlumno);

alumnosRouter.post('/obteneralumno', getAlumnoById);

//alumnosRouter.post('/actualizaralumno',[verificarToken, isAdmin], upDateAlumno);
alumnosRouter.post('/actualizaralumno', upDateAlumno);


alumnosRouter.post('/borraralumno', deleteAlumno);

//alumnosRouter.post("/agregaralumno", [verificarToken, isAdmin]  , crearAlumno);

alumnosRouter.post("/agregaralumno", crearAlumno);

module.exports =  alumnosRouter ; 