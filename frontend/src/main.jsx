import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { AuthContextProvider } from './context/AuthContext.jsx'


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <AuthContextProvider>
    <ToastContainer
      theme="dark"
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnHover={false}
    />
    <App />
    </AuthContextProvider>
  </BrowserRouter>
);
