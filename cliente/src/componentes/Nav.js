import React from 'react'


export default function Nav() {

  return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <a className="navbar-brand" href="/">Registro de Alumnos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Inicio</a>
        </li>
         <li className="nav-item">
          <a className="nav-link" href="editaralumnos">Editar Alumnos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="agregaralumno">Agregar Alumno</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
