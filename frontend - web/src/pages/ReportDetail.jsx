import React from 'react'
import NavBasic from '../components/NavBasic'
import { useLocation, useNavigate } from 'react-router-dom';

const ReportDetail = () => {
    const { state } = useLocation();
    return (
        <>
            <NavBasic />
            <div className='m-4 flex flex-col mx-auto justify-center items-center shadow-md'>
                <h1 className='text-2xl font-bold my-3'>Report By : {state.reportBy}</h1>
                <h2 className='text-xl font-bold my-3'>Doctor Name : Dr. Rahul Joshi</h2>
                <h2 className='text-xl font-bold my-3'>Date : {state.date}</h2>
                <h2 className='text-xl font-bold'>Symptoms:</h2>
                <ul>
                    {state.symptoms.map((s) => (
                        <li>{s}</li>
                    ))}
                </ul>


                <h2 className='text-xl'>Comments By Health Provider :</h2>
                <p className='font-bold mb-4'>{state.comments}</p>
            </div>
        </>
    )
}

export default ReportDetail