import React, {useState} from 'react'
import './cssPages/LoginPage.css'
import { Alert } from 'react-bootstrap'
//import reactImg from './img/imagen1r.png'
//import mongoImg from './img/mongoImagen.png'
//import nodeImg from './img/nodeImagen.png'
import unpazlogo from './img/unpazlogo.jpg'
import { useNavigate } from 'react-router-dom'
//import {UserContext} from '../componentes/contex/UsersContext';
import axios from 'axios'
//import Swal from 'sweetalert2'

export default function LoginPage() {
       const navegar = useNavigate();
      const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
    const[error, setError]= useState(false);
      axios.defaults.withCredentials = true;

      
      const handleSubmit = async (e) => {
              const usuario = {
           email: email,
          password: password
  }
        e.preventDefault();

        try {
           const {data} = await axios.post('/login',usuario,{
        headers: {'Content-Type': 'application/json'}
      })
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data))
          /*.then(res => {
                  if(res.data){
                    navegar('/agregaralumno')
                  }
          }).catch(() => {Swal.fire('ERROR!','Ingrese nuevamente los datos')})*/
             navegar('/home')
        }catch (error) {
          setError(error.response.data.msg)
        }
      }

  return (
   <div class="container px-4 py-5 mx-auto">
    { error && (
        <Alert variant='danger'> {error}</Alert>
    )}
    <div class="card card0">
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3">
                        <img id="logo" src={unpazlogo} alt="Logo UNPAZ" width='100px' />
                        </div>
                        <h3 class="mb-5 text-center heading">Bienvenido</h3>

                        <h6 class="msg-info text-center">Inicie sesión para continuar</h6>

                        <div class="form-group">
                            <label class="form-control-label text-muted">Email</label>
                            <input type="text" id="email" name="email" placeholder="ejemplo@ejemplo.com"
                            onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>

                        <div class="form-group">
                            <label class="form-control-label text-muted">Password</label>
                            <input type="password" id="psw" name="psw" placeholder="Password" class="form-control"
                            onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </div>

                        <div class="row justify-content-center my-3 px-3">
                            <button class="btn-block btn-color" onClick={handleSubmit}>Entrar</button>
                        </div>

                        <div class="row justify-content-center my-2">
                            <a href="/*"><small class="text-muted">Olvidó su contraseña?</small></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card2">
                <div class="my-auto mx-md-5 px-md-5 right">
                    <h3 class="text-white">Sistema de gestión de Alumnos</h3>
                    <small class="text-white">Ingrese como administrador para realizar la gestión de los alumnos de la institución vinculada a la UNPAZ.</small>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
