/* eslint-disable react/prop-types */

import { createContext } from "react";

// import { createContext } from "react";


// export const AuthContext = createContext(null)
// const ProviderContext = ({children}) => {


//     const info = 'hello'


//     return (
//         <AuthContext.Provider value={info}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default ProviderContext;

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {



  const info = 'hello'
  return (
    <AuthContext.Provider value={info}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;