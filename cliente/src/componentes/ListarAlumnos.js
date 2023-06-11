import React, { useState, useEffect } from 'react'
import AlumnoIndividual from './AlumnoIndividual'
import axios from 'axios'

function ListarAlumos() {

const [dataAlumno, setAlumno] = useState([]);

useEffect(() => {
    axios.get('/mostraralumnos').then(res => {
      setAlumno(res.data)
    }).catch(err => {
      console.log(err)
    })
}, [])

//mapear listaAlumno en objeto Alumnoindiviual
const listaAlumno = dataAlumno.map(alumno => {
    return (
  <AlumnoIndividual alumno={alumno}/> 
    )
})
  return (
     <div style={{margin: 70 }}>
      <div className='container'>
        <h1 style={{ color: '#012b85', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', }}>
          Editar Alumno
        </h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th >Nombre</th>
                  <th >Apellido</th>
                  <th >DNI</th>
                  <th >Calle</th>
                  <th >Número</th>
                  <th >Código Postal</th>
                  <th >Tutor</th>
                  <th >Género</th>
                  <th ></th>
                </tr>
              </thead>
              <tbody>
                {listaAlumno}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListarAlumos