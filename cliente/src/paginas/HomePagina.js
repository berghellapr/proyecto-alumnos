import React from 'react'
import './cssPages/HomePage.css'
import reactImg from './img/imagen1r.png'
import mongoImg from './img/mongoImagen.png'
import nodeImg from './img/nodeImagen.png'

export default function HomePage() {
  return (
   <div class="container px-4 py-5 mx-auto">
    <div class="card card0">
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
            <h1 style={{ color: '#012b85', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', }}>Sistema de gestión de Alumnos</h1>
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3">
                        </div>
                        <h3 class="mb-5">Bienvenido</h3>
                        <p>
                          A través de esta aplicación, podrá gestionar el registro de alumnos de la institución vinculada a la <b>Universidad Nacional de José C. Paz</b>. 
                          Podrá ver el reporte de alumnos en la base de datos, agregar alumnos, editar su información y, de ser necesario, eliminarlos.
                        </p>
                         <div >
                            &nbsp;   &nbsp;   &nbsp;   &nbsp;   &nbsp;
    <img src={reactImg} alt='reactImagen' width='100px'/>
      &nbsp;  &nbsp;  &nbsp;   &nbsp; 
    <img src={nodeImg} alt='nodeImagen' width='100px'/>
    </div>
    <div class="row justify-content-center">
     <img src={mongoImg} alt='mongoImagen' width='100px'/>
    </div>
                    </div>
                </div>
            </div>
            <div class="card card2">
                <div class="my-auto mx-md-5 px-md-5 right">
                    <h3 class="text-white">Consultas</h3>
                    <p style={{color: "white"}}>Contacto:<br />
                        <b> alexissilvapaiva97@gmail.com </b><br />
                        <b> roxanaberghella@gmail.com </b><br />
                        <b> luisblanco29285793@gmail.com</b><br />
                        <b> tecnosabry@gmail.com</b><br />
                    </p>
                </div>
            </div>            
        </div>
    </div>
</div>
  )
}
