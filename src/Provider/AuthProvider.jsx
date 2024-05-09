/* eslint-disable react/prop-types */

import { createContext } from "react";
import auth from "../Component/firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";




export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
 



  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  

  const info = {
    userLogin
  }
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;