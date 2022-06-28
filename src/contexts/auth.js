/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {createContext, useState, useEffect} from 'react';
import firebaseApp from '../config/FirebaseConfig';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  deleteUser,
} from 'firebase/auth';

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const auth = getAuth(firebaseApp);
  const [user, setUser] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //Functions for update user informations
  function UpdateUserDisplayName(dataForm) {
    const displayName = dataForm.name;

    updateProfile(user, {
      displayName: displayName,
    })
      .then(() => {
        // Profile updated!
        console.warn('Nome de usuário atualizado!');
        // ...
      })
      .catch(error => {
        console.warn(error);
      });
  }

  function UpdateUserEmail(dataForm) {
    const newEmail = dataForm.validateEmail;

    updateEmail(user, newEmail)
      .then(() => {
        // Email updated!
        console.warn('Email atualizado!');
        // ...
      })
      .catch(error => {
        // An error occurred
        console.warn(error);
        // ...
      });
  }
  function UpdateUserPassword(dataForm) {
    const newPassword = dataForm.validatePassword;

    updatePassword(user, newPassword)
      .then(() => {
        // Update successful.
        console.warn('Senha atualizada!');
      })
      .catch(error => {
        // An error ocurred
        console.warn(error);
        // ...
      });
  }

  function DeleteUserAccount() {
    deleteUser(user)
      .then(() => {
        // User deleted.
        setUser(false);
        console.warn('Usuário deletado');
      })
      .catch(error => {
        // An error ocurred
        console.warn(error);
        // ...
      });
  }

  //Functions for user state
  function SignIn(dataForm) {
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

  function SignUp(dataForm) {
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

  function SignOutUser() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(false);
        setShowAlert(false);
      })
      .catch(error => {
        // An error happened.
      });
  }

  function ShowAlertForSignOut() {
    setShowAlert(true);
  }

  function HideAlertForSignOut() {
    setShowAlert(false);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        SignUp,
        SignOutUser,
        SignIn,
        showAlert,
        ShowAlertForSignOut,
        HideAlertForSignOut,

        UpdateUserDisplayName,
        UpdateUserEmail,
        UpdateUserPassword,
        DeleteUserAccount,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
