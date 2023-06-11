import React, { useState } from 'react'
//import uniquid from 'uniqid'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
import Swal from 'sweetalert2'

function AgregarAlumno() {
  //creamos los hooks para cada caracteristica de nuestro ALUMNO
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState({ calle: '', numero: '', codigo_postal: '' });
  const [tutor, setTutor] = useState('');
  const [genero, setGenero] = useState('');
  const [error, setError] = useState(false);

  const navegar = useNavigate();

  function agregarAlumno() {
    if (!nombre || !apellido || !dni || !direccion.calle || !direccion.numero || !direccion.codigo_postal || !tutor || !genero) {
      setError('Todos los campos son requeridos');
      return;
    }

    const alumno = {
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      direccion: direccion,
      tutor: tutor,
      genero: genero
    }
    console.log(alumno)
    try {
      axios.post('/agregaralumno', alumno, {
        headers: { 'Content-Type': 'application/json' }
      }).then(res => {
        Swal.fire('LISTO!', 'El Alumno se creo correctamente')
        navegar('/home');
      })
        .catch(err => { Swal.fire('ERROR', 'YA EXISTE EL DNI') })
    } catch (errorPost) {
      setError(errorPost.response.data.msg)
    }
  }

  return (
    <div style={{ margin: 40 }}>
      <div className='container'>
        <div className='row'>
          <h1 className='mt-4 mb-4' style={{ color: '#012b85', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', }}>Agregar un nuevo Alumno</h1>
        </div>
        <div className='row'>
          <div className='col-sm-6 offset-3'>
            <div className='mb-3'>
              <label htmlFor="nombre" className='form-label'>
                <strong>Nombre</strong>
              </label>
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
              {!nombre.match(/^[A-Za-z]+$/) && <p style={{ color: 'dimgray', fontSize: '12px' }}>El nombre solo debe contener un máximo de 14 caracteres A-Z. *</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="apellido" className='form-label'>
                <strong>Apellido</strong>
              </label>
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
              {!apellido.match(/^[A-Za-z]+$/) && <p style={{ color: 'dimgray', fontSize: '12px' }}>El nombre solo debe contener un máximo de 14 caracteres A-Z. *</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="dni" className='form-label'>
                <strong>Dni</strong>
              </label>
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
              {!dni.match(/^\d+$/) && <p style={{ color: 'dimgray', fontSize: '12px' }}>El DNI solo debe contener números sin puntos y no debe exceder los 8 caracteres. *</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="direccion" className='form-label'>
                <strong>Dirección</strong>
              </label>
            </div>
            <div className='mb-3'>
              <label htmlFor="calle" className='form-label' style={{ fontSize: '14px' }}>
                Calle
              </label>
              <input type="text" className='form-control'
                value={direccion.calle}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const regex = /^[A-Za-z]+$/;
                  if ((regex.test(inputValue) || inputValue === '') && inputValue.length <= 14) {
                    setDireccion((prevDireccion) => ({ ...prevDireccion, calle: inputValue }))
                  }
                }}
              ></input>
              {!direccion.calle.match(/^[A-Za-z]+$/) && <p style={{ color: 'dimgray', fontSize: '12px' }}>La calle solo debe contener un máximo de 14 caracteres A-Z. *</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="numero" className='form-label' style={{ fontSize: '14px' }}>
                Número
              </label>
              <input type="text" className='form-control'
                value={direccion.numero}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const regex = /^\d+$/;
                  if ((regex.test(inputValue) || inputValue === '') && inputValue.length <= 5) {
                    setDireccion((prevDireccion) => ({ ...prevDireccion, numero: inputValue }))
                  }
                }}
              ></input>
              {!direccion.numero.match(/^\d+$/) && <p style={{ color: 'dimgray', fontSize: '12px' }}>El número de la calle solo debe contener números sin puntos y no debe exceder los 5 caracteres. *</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="codigo_postal" className='form-label' style={{ fontSize: '14px' }}>
                Código Postal
              </label>
              <input type="text" className='form-control'
                value={direccion.codigo_postal}
                onChange={(e) => {
                  const inputValue = e.target.value;
                  const regex = /^(B?\d{0,4}|\d{0,4})$/;
                  if (regex.test(inputValue)) {
                    setDireccion((prevDireccion) => ({ ...prevDireccion, codigo_postal: inputValue }))
                  }
                }}
              ></input>
              {!/^(B?\d{4}|\d{4})$/.test(direccion.codigo_postal) && <p style={{ color: 'dimgray', fontSize: '12px' }}>El código postal debe respetar el formato válido. Ejemplos: 1665 o B1665. No debe exceder los 6 caracteres. *</p>}
            </div>
            <div className='mb-3'>
              <label htmlFor="tutor" className='form-label'>
                <strong>Tutor</strong>
              </label>
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
              {!tutor.match(/^[A-Za-z\s]+$/) && (<p style={{ color: "dimgray", fontSize: "12px" }}>El tutor solo debe contener caracteres A-Z y espacios. Ejemplo: NombreTutor ApellidoTutor. No debe exceder los 30 caracteres. *</p>)}
            </div>
            <div className='dropdown-container'>
              <label htmlFor="genero" className='form-label'>
                <strong>Género</strong>
              </label>
              <select
                size="1"
                className="form-control rounded-dropdown"
                value={genero}
                onChange={(e) => {
                  const opcSelecc = e.target.value;
                  setGenero(opcSelecc);
                }}
              >
                <option value="" disabled>Seleccione</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
              </select>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
              <button onClick={agregarAlumno} className='btn btn-success'>Guardar Alumno</button>
            </div>
            {error && (
              <Alert variant='danger'> {error}</Alert>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AgregarAlumno;