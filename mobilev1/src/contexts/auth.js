import React, {createContext, useState} from 'react';
import firebaseApp from '../config/FirebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const auth = getAuth(firebaseApp);
  const [userLog, setUserLog] = useState(null);
  const [signed, setSigned] = useState(false);

  function signIn(dataForm) {
    const email = dataForm.email;
    const password = dataForm.password;
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        setSigned(userCredential.user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage);
      });
  }

  function signUp({dataForm, userLogInfo}) {
    const email = dataForm.email;
    const password = dataForm.password;
    const name = userLogInfo.name;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        setSigned(userCredential.user);
        setUserLog(name);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage);
        // ..
      });
  }

  function signOut() {
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{signed, userLog, signUp, signOut, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
