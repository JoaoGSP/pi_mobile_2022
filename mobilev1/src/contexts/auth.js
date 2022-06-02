import React, {createContext, useState, useEffect} from 'react';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from '../config/FirebaseConfig';

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const auth = getAuth(firebaseApp);
  const [userLog, setUserLog] = useState(null);
  const [signed, setSigned] = useState(false);

  {
    /*useEffect(() =>{
    async function loadStoragedData () {
      const storagedUser = await AsyncStorage.getItem('@storage_User')
      //Verificando se há usuário logado
      if(storagedUser){
        setUserLog(JSON.parse(storagedUser))
      }
    }

    loadStoragedData()
  }, [])*/
  }

  //async
  function signIn(dataForm) {
    const email = dataForm.email
    const password = dataForm.password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setSigned(userCredential.user)}
      )
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage)
      });
  }

  function signUp(dataForm) {
    const email = dataForm.email
    const password = dataForm.password

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
    //createUserWithEmailAndPassword({
    //  id: Math.random(2),
    //  name: dataForm.name,
    //  mail: dataForm.mail,
    //  password: dataForm.password,
    //  avatarUrl:
    //    'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png',
    //});
    //await AsyncStorage.setItem('@storage_User', JSON.stringify(userLog))
  }

  function signOut() {
    //AsyncStorage.clear().then(
    //)
    () => {
      setSigned(false);
    };
  }

  return (
    <AuthContext.Provider
      value={{signed, userLog, signUp, signOut, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
