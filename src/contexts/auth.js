/* eslint-disable prettier/prettier */
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

  //Function for manipulate user
  function updateUserProfile(dataForm) {
    const displayName = dataForm.name;
    const newEmail = dataForm.email;
    const newPassword = dataForm.validatePassword;

    if (displayName) {
      updateProfile(user, {
        displayName: displayName,
      })
        .then(() => {
          // Profile updated!
          // ...
        })
        .catch(error => {
          // An error occurred
          // ...
        });
    }

    if (newEmail) {
      updateEmail(user, newEmail)
        .then(() => {
          // Email updated!
          // ...
        })
        .catch(error => {
          // An error occurred
          // ...
        });
    }

    if (newPassword) {
      updatePassword(user, newPassword)
        .then(() => {
          // Update successful.
        })
        .catch(error => {
          // An error ocurred
          // ...
        });
    }
  }

  //Functions for user state
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

  function showAlertForSignOut() {
    setShowAlert(true);
  }
  function hideAlertForSignOut() {
    setShowAlert(false);
  }

  function signOutUser() {
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

  return (
    <AuthContext.Provider
      value={{
        user,
        signUp,
        signOutUser,
        signIn,
        updateUserProfile,
        showAlert,
        showAlertForSignOut,
        hideAlertForSignOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
