import React, { useState } from 'react'
import NavBasic from '../components/NavBasic'
import { useLocation } from 'react-router-dom';
import Button from "@mui/material/Button";
import axios from "axios"

const AddReport = () => {
    const { state } = useLocation();
    const [xray, setXray] = useState(null);
    const [breport, setBReport] = useState(null);
    const [comment, setComment] = useState("");
    const [amt, setAmt] = useState("");

    console.log(state);

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

        let formData2 = new FormData();
        formData2.append("file", xray);

        const res2 = await axios.post("http://localhost:8000/segment", formData2, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        const fileData2 = res2.data;

        console.log(fileData2);

        const res3 = await axios.post("http://localhost:8000/edge-detection", formData2, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })

        const fileData3 = res3.data;

        console.log(fileData3);

        const res4 = await axios.get("http://localhost:8000/visualize")
        const visualize = res4.data;

        console.log(visualize);

        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          };

        const hpname = await axios.post("http://localhost:5000/api/provider/get-provider-data",{},config);

        console.log(hpname.data.provider.name);

        const addReport = await axios.post("http://localhost:5000/api/provider/add-report",{
            id : state._id,
            reportBy : hpname.data.provider.name,
			xrays_data: [fileData.xrayLink],
			symptoms: ['Cough','Cold','Vomit'],
			comments: comment,
			edgeDetection : fileData3,
			segmentation : fileData2,
			visualization : visualize ,
			amount : amt,
            bloodReport : fileData.breportLink
        },config)

        console.log(addReport);

        if(addReport.status === 200){
            alert("Report Added")
        }



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

            <input onChange={(e) => {
                setComment(e.target.value)
            }} value={comment} placeholder='Add Your Comment' type="text" className='mx-4 w-[40%] p-2 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none' />

            <h1 className='text-xl m-4'>Bill Amount</h1>

            <input onChange={(e) => {
                setAmt(e.target.value)
            }} value={amt} placeholder='Add Your Comment' type="text" className='mx-4 w-[40%] p-2 block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50  focus:outline-none' />
            
            <div className='m-4'>
                <Button onClick={uploadFiles} variant='contained'>Submit </Button>
            </div>
            

        </div>
    )
}

export default AddReport