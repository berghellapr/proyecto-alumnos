const AlumnosDB = require('../models/Alumnos');

//todo ok
const crearAlumno = async (req, res) => {
  const { nombre, apellido, dni, direccion, tutor, genero } = req.body;

  try {
    const newAlumno = new AlumnosDB({
      nombre,
      apellido,
      dni,
      direccion,
      tutor,
      genero
    });

    const alumnoSaved= await newAlumno.save();

    res.status(201).json({msg : 'Alumno Creado!'});
  } catch (error) {
    return res.status(500).json({msg : 'El DNI ya existe'});
  }
};

//listarAlumnos() todo ok
 const getAlumno = async (req, res) => {
  const alumnos = await AlumnosDB.find().then(data => {
        res.send(data);
      })
      .catch(error => {
        res.send(error);
      })
};

//listarAlumno() *!! se pasa por body, no por params.
 const getAlumnoById = async (req, res) => {
  const { alumnoId } = req.body;

  const alumno = await AlumnosDB.find(alumnoId);
  res.status(200).json(alumno);
};

//actualizarAlumno() * !! se pasa por body, no por params.
/*const upDateAlumno = async (req, res) => {
     //const { _id , nombre, apellido, dni, tutor } = req.body;
        await AlumnosDB.findByIdAndUpdate( {_id : req.body._id }, {
          nombre : req.body.nombre,
          apellido : req.body.apellido,
          dni: req.body.dni,
          tutor: req.body.tutor
        }).then ( () => {
          res.send('Se actualizo Correctamente');
        }).catch(error => {
          res.send(error);
        })
}*/

const upDateAlumno = async (req, res) => {
  const { _id, direccion, genero, ...otherFields } = req.body;

  try {
    const updatedAlumno = {
      direccion,
      genero,
      ...otherFields
    };

    await AlumnosDB.findByIdAndUpdate(_id, updatedAlumno);

    res.send('Se actualizó correctamente');
  } catch (error) {
    res.status(500).send(error);
  }
};

//borrarAlumno()
const deleteAlumno = async (req,res) => {
  await AlumnosDB.findByIdAndDelete({_id : req.body._id})
  .then( () => {
   res.send('Alumno Eliminado');
  })
  .catch(error => {
   res.send(error);
  })
}
module.exports = { crearAlumno, getAlumno, getAlumnoById, upDateAlumno, deleteAlumno }