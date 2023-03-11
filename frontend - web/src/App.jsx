import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import PatientRegister from './pages/PatientRegister';
import SearchPatientList from './pages/SearchPatientList';
import SendRequest from './pages/SendRequest';
import Dashboard from './pages/Dashboard';
import PatientDetailsCard from './pages/PatientDetailsCard';

function App() {
  return (
  <Routes>
    <Route path = "/Dashboard" element={<Dashboard/>} >
    </Route>
        <Route path='patientRegister' element={<PatientRegister />} />
        <Route path = "listPatients" element={<SearchPatientList/>} />
    <Route index path='/' element={<Landing />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path = "/sendReq" element={<SendRequest/>} />
    <Route path = "/patdet" element={<PatientDetailsCard/>} />
    

  </Routes>
  )
}

export default App
