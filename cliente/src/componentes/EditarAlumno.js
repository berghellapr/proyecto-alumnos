import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router';
import axios from 'axios'
import Swal from 'sweetalert2'


function EditarUsuario() {

  const params = useParams();

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [dni, setDni] = useState('');
  const [direccion, setDireccion] = useState({ calle: '', numero: '', codigo_postal: '' });
  const [tutor, setTutor] = useState('');
  const [genero, setGenero] = useState([]);

  const navegar = useNavigate();

  useEffect(() => {
    axios.post('/obteneralumno', { _id: params._id })
      .then(res => {
        const dataAlumno = res.data.find(alumno => alumno._id === params._id);

        if (dataAlumno) {
          setNombre(dataAlumno.nombre);
          setApellido(dataAlumno.apellido);
          setDni(dataAlumno.dni);
          setDireccion(dataAlumno.direccion);
          setTutor(dataAlumno.tutor);
          setGenero(dataAlumno.genero);
        }
      })
  }, [params._id])

  function editarAlumno() {
    const actualizarAlumno = {
      nombre: nombre,
      apellido: apellido,
      dni: dni,
      direccion: direccion,
      tutor: tutor,
      genero: genero,
      _id: params._id
    }
    axios.post('/actualizaralumno', actualizarAlumno)
      .then(res => { Swal.fire('LISTO!', 'USUARIO ACTUALIZADO') },
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
            <input type="text" className='form-control' value={nombre} onChange={(e) => { setNombre(e.target.value) }}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor="apellido" className='form-label'>Apellido</label>
            <input type="text" className='form-control' value={apellido} onChange={(e) => { setApellido(e.target.value) }}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor="dni" className='form-label'>DNI</label>
            <input type="text" className='form-control' value={dni} onChange={(e) => { setDni(e.target.value) }}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor="calle" className='form-label'>Calle</label>
            <input type="text" className='form-control' value={direccion.calle} onChange={(e) => { setDireccion({ ...direccion, calle: e.target.value }) }}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor="numero" className='form-label'>Número</label>
            <input type="text" className='form-control' value={direccion.numero} onChange={(e) => { setDireccion({ ...direccion, numero: e.target.value }) }}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor="codigo_postal" className='form-label'>Código Postal</label>
            <input type="text" className='form-control' value={direccion.codigo_postal} onChange={(e) => { setDireccion({ ...direccion, codigo_postal: e.target.value }) }}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor="tutor" className='form-label'>Tutor</label>
            <input type="text" className='form-control' value={tutor} onChange={(e) => { setTutor(e.target.value) }}></input>
          </div>
          <div className='mb-3'>
            <label htmlFor="genero" className='form-label'>Género</label>
            <select className='form-control' value={genero} onChange={(e) => { setGenero(e.target.value) }}>
              <option value="">Seleccionar</option>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
            </select>
          </div >
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
            <button onClick={editarAlumno} className='btn btn-success'>Actualizar Alumno</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditarUsuario