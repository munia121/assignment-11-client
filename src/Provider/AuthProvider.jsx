/* eslint-disable react/prop-types */

import { createContext, useEffect, useState } from "react";
import auth from "../Component/firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import axios from "axios";




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [autoUpdate, setAutoUpdate] = useState(false)
  const provider = new GoogleAuthProvider();



  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }



  const googleLogin = () => {
    return signInWithPopup(auth, provider)
  }



  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }


  // github
  const gitHubProvider = new GithubAuthProvider();
  // gitHubProvider.addScope('user:email')
  const gitHubLogin = () => {
    setLoading(true)
    return signInWithPopup(auth, gitHubProvider)
  }




  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      const userEmail = currentUser?.email || user?.email
      const loggedUser = { email: userEmail }
      console.log('user in tha state changed', currentUser);
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        axios.post('https://assignment-11-server-eight-tau.vercel.app/jwt', loggedUser, { withCredentials: true })
          .then(res => {
            console.log('token response ', res.data)
          })
      }
      else {
        axios.post('https://assignment-11-server-eight-tau.vercel.app/logout', loggedUser, { withCredentials: true })
          .then(res => {
            console.log(res.data)
          })
      }

    })
    return () => {
      unSubscribe();
    }
  }, [autoUpdate])



  // update user profile
  const updateUserProfile = (name, image) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image
    })
  }



  const info = {
    user,
    createUser,
    userLogin,
    googleLogin,
    logOut,
    loading,
    setAutoUpdate,
    updateUserProfile,
    gitHubLogin


  }

  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;