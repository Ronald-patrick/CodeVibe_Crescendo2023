import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import PatientRegister from './pages/PatientRegister';
import SearchPatientList from './pages/SearchPatientList';
import SendRequest from './pages/SendRequest';
import Dashboard from './pages/Dashboard';

function App() {
  return (
  <Routes>
    <Route path='/' element={<Landing />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/patientRegister' element={<PatientRegister />} />
    <Route path = "/listPatients" element={<SearchPatientList/>} />
    <Route path = "/sendReq" element={<SendRequest/>} />
    <Route path = "/Dashboard" element={<Dashboard/>} />
  
    

  </Routes>
  )
}

export default App
