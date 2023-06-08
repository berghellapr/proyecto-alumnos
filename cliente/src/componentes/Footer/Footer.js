import React from 'react'
import './footer.css'
import unpaz from '../../paginas/img/unpaz.png'

function Footer() {
  return (
    <div>
       <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="/home" class="nav-link px-2 text-muted">Inicio</a></li>
      <li class="nav-item"><a href="/home" class="nav-link px-2 text-muted">Trabajar con nosotros</a></li>
      <li class="nav-item"><a href="/*" class="nav-link px-2 text-muted">FAQs</a></li>
      <li class="nav-item"><a href="/home" class="nav-link px-2 text-muted">Sobre nosotros</a></li>
      <li class="nav-item"><a href="/home" class="nav-link px-2 text-muted">Contacto</a></li>
    </ul>
    <p class="text-center text-muted">© 2023 COMPANY, UNPAZ  <span className="logo-container">
            <img src={unpaz} alt="unpaz" className="unpaz" />
          </span></p>
  </footer>
    </div>
  )

}
export default Footer