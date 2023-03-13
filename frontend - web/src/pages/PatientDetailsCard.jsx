import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from "@mui/material";
import ViewPatient from '../components/ViewPatient';
import ReportList from '../components/ReportList';
import NavBasic from '../components/NavBasic';

const PatientDetailsCard = () => {
  const { state } = useLocation();
  const navigate = useNavigate();


  const addReport = ()=>{
    navigate("/add-report",{
        state : state
    })
  }

  
  return (
    <>
    <NavBasic/>
      
      <div className="bg-white shadow-xl rounded border-[1px] border-gray-300 px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-auto max-w-md">
      <Button onClick={addReport} variant="contained">Add Report</Button>
        <div className="mb-4 mt-4">
          <h1 className="text-gray-900 font-bold text-2xl mb-2">{state.name}</h1>
          <p className="text-gray-600 text-lg">{state.email}</p>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Phone
            </label>
            <p className="text-gray-700">{state.phone_number}</p>
          </div>

        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Email Address
            </label>
            <p className="text-gray-700">{state.email}</p>
          </div>
          <div className="md:w-1/2 mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
              UUID (Aadhaar)
            </label>
            <p className="text-gray-700">{state.aadhar}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className=" mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
              Address
            </label>
            <p className="text-gray-700">{state.address}</p>
          </div>

        </div>
      </div>
      <ViewPatient  />
      <ReportList data={state} />
    </>
  )
}

export default PatientDetailsCard
