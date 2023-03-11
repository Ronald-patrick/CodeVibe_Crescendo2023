import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AllPatients from "./pages/AllPatients";
import RegisterHP from "./pages/RegisterHP";
import ReportList from "./components/ReportList";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<AllPatients />} />
      <Route path='/registerhp' element={<RegisterHP />} />
      <Route path='/reportlist' element={<ReportList />} />

    </Routes>
  );
}

export default App;
