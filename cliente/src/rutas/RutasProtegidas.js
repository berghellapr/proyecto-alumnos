import React, {useContext} from 'react'
import {UserContext} from '../componentes/contex/UsersContext';
import { Navigate, Outlet } from 'react-router-dom'

const RutasProtegidas = ()=> {
const { isLogin } = useContext(UserContext);
 //const login = false;
  if (isLogin){
    return <Outlet/>
  }else{
      return <Navigate to='/' />
  }
}

export default RutasProtegidas;