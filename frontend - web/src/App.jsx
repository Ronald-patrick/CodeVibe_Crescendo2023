import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import RegisterHP from "./pages/RegisterHP";
import ReportList from "./components/ReportList";
import PatientRegister from './pages/PatientRegister';
import SearchPatientList from './pages/SearchPatientList';
import SendRequest from './pages/SendRequest';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path='patientRegister' element={<PatientRegister />} />
      <Route path="listPatients" element={<SearchPatientList />} />
      <Route index path='/' element={<ViewPatient />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/registerhp' element={<RegisterHP />} />
      <Route path='/reportlist' element={<ReportList />} />
      <Route path="/sendReq" element={<SendRequest />} />




    </Routes>
  );


}

export default App;
