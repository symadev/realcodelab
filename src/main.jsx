import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './assets/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './Components/Provider/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <AuthProvider>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={2000} />
    </AuthProvider>
  </StrictMode>,
)
