import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField  from "@mui/material/TextField";
import axios from "axios"

export default function PatientDetails() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [aadhar, setAadhar] = useState("");
  const [address, setAddress] = useState("");

  const addPatient = async (e)=>{
    e.preventDefault()
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    };

    const res = await axios.post("http://localhost:5000/api/provider/add-patient",{
      name,
      email,
      address,
      phone_number:phone,
      aadhar
    },config)

    console.log(res);

    if(res.status === 200){
      alert("Patient Added")
    }
    else{
      alert("Register Error")
    }
  }

  return (
    <>
      {/* <div className="hidden sm:block" aria-hidden="true">
                    <div className="py-5">
                        <div className="border-t border-gray-200" />
                    </div>
                </div> */}

      <div className='mt-10 sm:mt-0'>
        <h3 className='text-base font-semibold leading-6 text-gray-900'>
          Personal Information
        </h3>
        <div className='md:grid md:grid-cols-0 md:gap-0'>
          {/* <div className="md:col-span-1">
                            <div className="px-4 sm:px-0">
                                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                            </div>
                        </div> */}
          <div className='mt-5 md:col-span-2 md:mt-0 border-2 border-violet-200'>
            <form method='POST'>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Name
                      </label>
                      <input
                        type='text'
                        name='name'
                        id='name'
                        autoComplete='given-name'
                        className='mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-100 sm:text-sm sm:leading-6'
                        value={name}
                        onChange={(e)=>{
                          setName(e.target.value)
                        }}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label
                        htmlFor='email-address'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Email address
                      </label>
                      <input
                        type='text'
                        name='email-address'
                        id='email-address'
                        autoComplete='email'
                        className='mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-100 sm:text-sm sm:leading-6'
                        value={email}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                      />
                    </div>
                    {/* <div className="col-span-6 sm:col-span-3">
                                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Country
                                                </label>
                                                <select
                                                    id="country"
                                                    name="country"
                                                    autoComplete="country-name"
                                                    className="mt-2 px-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-indigo-100 sm:text-sm sm:leading-6"
                                                >
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                </select>
                                            </div> */}

                    <div className='col-span-6'>
                      <label
                        htmlFor='street-address'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Address
                      </label>
                      <input
                        type='text'
                        name='street-address'
                        id='street-address'
                        autoComplete='street-address'
                        className='mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-100 sm:text-sm sm:leading-6'
                        value={address}
                        onChange={(e)=>{
                          setAddress(e.target.value)
                        }}
                      />
                    </div>
                    

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label
                        htmlFor='uuid'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        UUID (Aadhaar)
                      </label>
                      <input
                        type='text'
                        name='uuid'
                        id='uuid'
                        autoComplete='aadhaar'
                        className='px-2 mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-100 sm:text-sm sm:leading-6'
                        value={aadhar}
                        onChange={(e)=>{
                          setAadhar(e.target.value)
                        }}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Phone Number
                      </label>
                      <input
                        type='phone'
                        name='phone'
                        id='phone'
                        autoComplete='phone'
                        className='mt-2 px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-indigo-100 sm:text-sm sm:leading-6'
                        value={phone}
                        onChange={(e)=>{
                          setPhone(e.target.value)
                        }}
                      />
                    </div>

                    {/* <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <div className="flex items-center justify-center">
                                                <div
                                                    className="relative mb-3 xl:w-96"
                                                    data-te-datepicker-init
                                                    data-te-input-wrapper-init>
                                                         <label
                                                        for="floatingInput"
                                                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                                                    >Select a date</label
                                                    >
                                                    <input
                                                        type="text"
                                                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        placeholder="Select a date" />
                                                   
                                                    </div>
                                                </div>
                                            </div> */}
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <Button
                    type='submit'
                    variant="contained"
                    onClick={addPatient}
                    className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                  >
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
