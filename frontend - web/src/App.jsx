import { Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

import RegisterHP from "./pages/RegisterHP";
import ReportList from "./components/ReportList";
import PatientRegister from './pages/PatientRegister';
import SearchPatientList from './pages/SearchPatientList';
import SendRequest from './pages/SendRequest';
import Dashboard from './pages/Dashboard';

import ViewPatient from './components/ViewPatient'
import Landing from './pages/Landing'
import PatientProfile from "./pages/PatientDets/PatientProfile";
import Dashboard_One from "./pages/Dashboard_One";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/registerhp' element={<RegisterHP />} />
      <Route path='/reportlist' element={<ReportList />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path='patientRegister' element={<PatientRegister />} />
      <Route path="listPatients" element={<SearchPatientList />} />
      <Route  path='/view' element={<ViewPatient />} />
      <Route path="/sendReq" element={<SendRequest />} />
      <Route path = '/patientProfile' element={<PatientProfile />} />
      <Route path = '/patientProfile_1' element={<Dashboard_One />} />
    </Routes>
  );
}

export default App;
