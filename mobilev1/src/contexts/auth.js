import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const AuthContext = createContext({})

export function AuthProvider ({ children }){
  //const [signed, setSignOut] = useState(false)
  const [userLog, setUserLog] = useState(null)

  useEffect(() =>{
    async function loadStoragedData () {
      const storagedUser = await AsyncStorage.getItem('@storage_User')
      //Verificando se há usuário logado
      if(storagedUser){
        setUserLog(JSON.parse(storagedUser))
      }
    }

    loadStoragedData()
  }, [])

  async function signUp (dataForm){
    setUserLog({
    id: Math.random(),
    name: dataForm.name,
    mail: dataForm.mail,
    password: dataForm.password,
    avatarUrl: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png',
    })
    await AsyncStorage.setItem('@storage_User', JSON.stringify(userLog))

  }
  function signOut (){
    AsyncStorage.clear().then(() =>{
      setUserLog(null)
    })
  }

  return(
  <AuthContext.Provider value={{signed: !!userLog, userLog, signUp, signOut}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContext