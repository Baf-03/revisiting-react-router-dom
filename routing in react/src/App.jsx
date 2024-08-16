import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/AuthPages/Login'
import SignUp from './Pages/AuthPages/Signup'
import Dashboard from './Pages/Dashboard'

function App() {

//routes k andr route andr multplenroute hosakte hain
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
  )
}

export default App
