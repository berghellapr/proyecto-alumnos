import React, {useState} from 'react'
//import uniquid from 'uniqid'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import Swal from 'sweetalert2'

function AgregarAlumno() {
 //creamos los hooks para canda caracteristica de nuestro ALUMNO
const [nombre, setNombre] = useState('');
const [apellido, setApellido] = useState('');
const [dni, setDni] = useState('');
const [tutor, setTutor] = useState('');
const[error, setError]= useState(false);

// const navegar = useNavigate();
function agregarAlumno() {
  const alumno = {
    nombre : nombre,
    apellido : apellido,
    dni : dni,
    tutor : tutor
  }
  console.log(alumno)
try {
  axios.post('/agregaralumno' , alumno, {
        headers: {'Content-Type': 'application/json'}
      }).then(res => {Swal.fire('LISTO!','El Alumno se creo correctamente')})
      .catch(err => {Swal.fire('ERROR','YA EXISTE EL DNI')})
}catch (errorPost){
  setError(errorPost.response.data.msg)
}
 
}

  return (
   <div style={{ margin: 40 }}>
      <div className='container'>
        { error && (
        <Alert variant='danger'> {error}</Alert>
    )}
        <div className='row'>
          <h1 className='mt-4 mb-4' style={{ color: '#012b85', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', }}>Agregar un nuevo Alumno</h1>
        </div>

        <div className='row'>
          <div className='col-sm-6 offset-3'>
            <div className='mb-3'>
              <label htmlFor="nombre" className='form-label'>Nombre</label>
              <input type="text" className='form-control'
                value={nombre}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const regex = /^[A-Za-z]+$/;
                  if ((regex.test(inputValue) || inputValue === '') && inputValue.length <= 14) {
                    setNombre(inputValue);
                  }
                }}
              ></input>
              {!nombre.match(/^[A-Za-z]+$/) && <p style={{ color: 'black', fontSize: '12px' }}>El nombre solo debe contener caracteres A-Z.</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="apellido" className='form-label'>Apellido</label>
              <input type="text" className='form-control'
                value={apellido}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const regex = /^[A-Za-z]+$/;
                  if ((regex.test(inputValue) || inputValue === '') && inputValue.length <= 14) {
                    setApellido(inputValue);
                  }
                }}
              ></input>
              {!apellido.match(/^[A-Za-z]+$/) && <p style={{ color: 'black', fontSize: '12px' }}>El apellido solo debe contener caracteres A-Z.</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="dni" className='form-label'>Dni</label>
              <input type="text" className='form-control'
                value={dni}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const regex = /^\d+$/;
                  if ((regex.test(inputValue) || inputValue === '') && inputValue.length <= 8) {
                    setDni(inputValue);
                  }
                }}
              ></input>
              {!dni.match(/^\d+$/) && <p style={{ color: 'black', fontSize: '12px' }}>El DNI solo debe contener números sin puntos y no debe exceder los 8 caracteres.</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="tutor" className='form-label'>Tutor</label>
              <input type="text" className='form-control' 
                value={tutor} 
                onChange={(e) => { 
                  const inputValue = e.target.value;
                  const regex = /^[A-Za-z\s]+$/;
                  if ((regex.test(inputValue) || inputValue === "") && inputValue.length <= 30) {
                    setTutor(inputValue);
                  }
                }}
              ></input>
            </div>
            {!tutor.match(/^[A-Za-z\s]+$/) && (<p style={{ color: "black", fontSize: "12px" }}>El tutor solo debe contener caracteres A-Z y espacios. Ejemplo: NombreTutor ApellidoTutor. No debe exceder los 30 caracteres.</p>)}
            <button onClick={agregarAlumno} className='btn btn-success'>Guardar Alumno</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgregarAlumno ;