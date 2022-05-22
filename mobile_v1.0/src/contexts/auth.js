import React, { createContext, useState } from 'react'

const AuthContextData = {
  signed: true,
  user: {} | null,
  signIn(){
  }
}

const AuthContext = createContext({AuthContextData})

export function AuthProvider ({ children }){

  const [ user, setUser ] = useState({} | null)

  function signIn (){
    setUser({nome: 'João'})
  }

  return(
  <AuthContext.Provider value={{signed: !!user , user, signIn}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContext