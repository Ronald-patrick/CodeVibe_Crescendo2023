import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AllPatients from "./pages/AllPatients";
import RegisterHP from "./pages/RegisterHP";
import ReportList from "./components/ReportList";
import PatientRegister from './pages/PatientRegister';
import SearchPatientList from './pages/SearchPatientList';
import SendRequest from './pages/SendRequest';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<AllPatients />} />
      <Route path='/registerhp' element={<RegisterHP />} />
      <Route path='/reportlist' element={<ReportList />} />
    <Route path='/patientRegister' element={<PatientRegister />} />
    <Route path = "/listPatients" element={<SearchPatientList/>} />
    <Route path = "/sendReq" element={<SendRequest/>} />

    </Routes>
  );


}

export default App;
