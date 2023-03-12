import React, { useState } from 'react'
import NavBasic from '../components/NavBasic'
import { useLocation, useNavigate } from 'react-router-dom';

const AddReport = () => {
    const { state } = useLocation();
    const [xray, setXray] = useState(null);
    const [breport, setBReport] = useState(null);
    const [comment, setComment] = useState("");
    const uploadFiles = async () => {
        let formData = new FormData();

        formData.append("xray", xray);
        formData.append("bloodReport", breport);

        const res = await axios.post("http://localhost:5000/api/provider/upload-files", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        const fileData = res.data;

        



    }
    return (
        <div>
            <NavBasic />
            <h1 className='text-2xl text-primary font-bold m-4'>Add Report</h1>
            <h1 className='text-xl m-4'>Upload X-ray</h1>
            <input
                className='p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none '
                id='file_input'
                type='file'
                onChange={(e) => {
                    let file = e.target.files[0];
                    setXray(file);
                }}
            />

            <h1 className='text-xl m-4'>Upload Blood Report</h1>

            <input
                className='p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none '
                id='file_input'
                type='file'
                onChange={(e) => {
                    let file = e.target.files[0];
                    setBReport(file);
                }}
            />

            <h1 className='text-xl m-4'>Comments</h1>

            <input onChange={(e)=>{
                setComment(e.target.value)
            }} value={comment} placeholder='Add Your Comment' type="text" className='mx-4 w-[40%] p-2 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none' />


        </div>
    )
}

export default AddReport