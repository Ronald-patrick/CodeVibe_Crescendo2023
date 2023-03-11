import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
  </Routes>
  )
}

export default App
