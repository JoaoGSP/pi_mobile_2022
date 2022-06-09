import React, {createContext, useState, useEffect} from 'react';
import firebaseApp from '../config/FirebaseConfig';
import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    });
  }, [])
  

  function signIn(dataForm) {
    const email = dataForm.email;
    const password = dataForm.password;
    
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        setUser(userCredential.user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage);
      });
  }

  function signUp(dataForm) {
    const email = dataForm.email;
    const password = dataForm.validatePassword;

    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in
        setUser(userCredential.user);
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage);
        // ..
      });
  }

  function signOutUser() {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser(false);
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <AuthContext.Provider value={{user, signUp, signOutUser, signIn}}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
