import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { router } from './Router/Route.jsx'
import { RouterProvider } from "react-router-dom";
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
// import AuthProvider from './Provider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </AuthProvider>
  </React.StrictMode>,
)
