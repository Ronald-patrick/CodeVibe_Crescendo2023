import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Button } from '@mui/material'

const Landing = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className='flex justify-center items-center max-w-[1400px] mt-6 mx-auto h-[45vh]'>
          <div className='flex flex-col justify-center items-start p-4  h-[100%]'>
            <h1 className='text-primary text-[60px] font-bold'>We've got you covered</h1>
            <p className='text-primary text-xl w-[60%] my-4'>MediVault is a modern, electronic health record platform used by leading organizations from across the healthcare ecosystem.</p>
            {/* <button className='w-[140px] bg-primary text-white h-[40px] mt-4  text-lg'></button> */}
            <Button variant='contained'>Get Connected</Button>
          </div>
          <img className='w-[35%]' src="./land1.svg" alt="Medicine" />
        </div>

        <div className='bg-[#e9ebf7] py-4 mt-[70px]'>
          <div className='flex justify-center items-center max-w-[1400px] mt-6 mx-auto h-[45vh]'>
            <img className='w-[35%]' src="./land2.svg" alt="Medicine" />
            <div className='flex flex-col justify-center items-start p-4  h-[100%] ml-[60px]'>
              <h1 className='text-primary text-[30px] font-bold'>A flourishing future starts with Healthcare IT that connects.</h1>
              <p className='text-primary text-xl w-[60%] my-4'>Our innovative healthcare technology and services connect clinicians, patients, payers, and partners to drive better health and financial outcomes.</p>
            </div>
          </div>
        </div>


        <div className='flex justify-center items-center max-w-[1400px] mt-6 mx-auto h-[45vh] mb-[10vh]'>
          <div className='flex flex-col justify-center items-start p-4  h-[100%]'>
            <h1 className='text-primary text-[30px] font-bold'>MORE PRODUCTIVE. MORE PROFITABLE. BETTER OUTCOMES.</h1>
            <p className='text-primary text-xl w-[60%] my-4'>Take quicker, more intelligent action with critical, real-time patient information at the point of care. Give clinicians and patients the support they're looking for with streamlined, flexible experiences that work the way they do.</p>
          </div>
          <img className='w-[35%]' src="./land3.svg" alt="Medicine" />
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Landing