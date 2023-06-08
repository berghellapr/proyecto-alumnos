import React, { createContext, useState } from 'react'
import axios from 'axios';


export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
      const [dataUser, setDataUser] = useState('');
      const [isLogin, setLogin] = useState(false);
      const [errorUser, setErrorUser] = useState(null);

const inicioSesion = async (email, password)=>{
  const usuario = {
           email: email,
          password: password
  }
    try {
          const {data} = await axios.post('/login',usuario,{
        headers: {'Content-Type': 'application/json'}
      })
      setDataUser({data});
      setLogin(true);
        } catch (error) {
      setDataUser(error.data);
        }
}

const logOut =()=>{
  setLogin(false);
}
return (
  <UserContext.Provider value= {{dataUser, isLogin, logOut, inicioSesion, errorUser}}>
        {children}
  </UserContext.Provider>
)

}