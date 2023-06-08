import React, {useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'
import Swal from 'sweetalert2'


function EditarUsuario() {
  
const params = useParams();

const [nombre, setNombre] = useState('')
const [apellido, setApellido] = useState('')
const [dni, setDni] = useState('');
const [tutor, setTutor] = useState('');

const navegar = useNavigate();

useEffect( () => {
 axios.post('/obteneralumno',{ _id : params._id})
 .then(res => {
       const dataAlumno = res.data.find(alumno => alumno._id === params._id);
      
      if (dataAlumno) {
        setNombre(dataAlumno.nombre);
        setApellido(dataAlumno.apellido);
        setDni(dataAlumno.dni);
        setTutor(dataAlumno.tutor);
      }
 })
},[params._id])

function editarAlumno() {
  const actualizarAlumno = {
    nombre : nombre,
   apellido: apellido,
   dni : dni,
   tutor: tutor,
   _id : params._id
  }
  axios.post('/actualizaralumno' , actualizarAlumno) 
  .then(res => {Swal.fire('LISTO!','USUARIO ACTUALIZADO')},
              navegar('/home'))
  .catch(err => console.log(err))
  }

  return (
    <div className='container'>
      <div className='row'>
    <h2 className='mt-4'>Editar Alumno</h2>
      </div>

     <div className='row'>
      <div className='col-sm-6 offset-3'>
      <div className='mb-3'>
    <label htmlFor="nombre" className='form-label'>Nombre</label>
    <input type="text" className='form-control' value={nombre} onChange={(e) =>{setNombre(e.target.value)}}></input>
      </div>

       <div className='mb-3'>
    <label htmlFor="apellido" className='form-label'>Apellido</label>
    <input type="text" className='form-control' value={apellido} onChange={(e) =>{setApellido(e.target.value)}}></input>
      </div>
      

       <div className='mb-3'>
    <label htmlFor="dni" className='form-label'>DNI</label>
    <input type="text" className='form-control' value={dni} onChange={(e) =>{setDni(e.target.value)}}></input>
      </div>

       <div className='mb-3'>
    <label htmlFor="apellido" className='form-label'>Tutor</label>
    <input type="text" className='form-control' value={tutor} onChange={(e) =>{setTutor(e.target.value)}}></input>
      </div>
    <button onClick={editarAlumno} className='btn btn-success'>Actualizar Alumno</button>
      </div>
    </div>
 </div>
  )
}

export default EditarUsuario