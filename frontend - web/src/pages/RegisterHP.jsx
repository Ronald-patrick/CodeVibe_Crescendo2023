import { Button, TextField } from "@mui/material";
import { useState } from "react";
import NavBasic from "../components/NavBasic"
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function RegisterHP() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const res = await axios.post("http://localhost:5000/api/provider/register",{
      name,
      email,
      address,
      phone_number:phone,
      password
    })

    console.log(res);

    if(res.status === 200){
      navigate('/login')
    }
    else{
      alert("Register Error")
    }

  }
  return (
    <>
    <NavBasic/>
    
      {/* <div className="hidden sm:block" aria-hidden="true">
                  <div className="py-5">
                      <div className="border-t border-gray-200" />
                  </div>
              </div> */}

      <div className='mt-10 sm:mt-0'>
        <h3 className='text-2xl p-4 mt-4 mb-2 text-center font-bold leading-6 text-primary'>
          Health Provider Information
        </h3>
        <div className='md:grid'>
          {/* <div className="md:col-span-1">
                          <div className="px-4 sm:px-0">
                              <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
                          </div>
                      </div> */}
          <div className='mt-5 md:col-span-2 md:mt-0 border-2 border-violet-200'>
            <form action='#' >
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-5 sm:p-6'>
                  <div className='flex flex-col'>

                    <div className='col-span-2'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Name
                      </label>
                      <TextField
                        type='text'
                        name='name'
                        id='name'
                        autoComplete='family-name'
                        className='mt-2 block w-[400px]  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        value={name}
                        onChange={(e)=>{
                          setName(e.target.value)
                        }}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='last-name'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Email
                      </label>
                      <TextField
                        type='text'
                        name='name'
                        id='name'
                        autoComplete='family-name'
                        className='mt-2 block w-[400px] rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        value={email}
                        onChange={(e)=>{
                          setEmail(e.target.value)
                        }}
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-4'>
                      <label
                        htmlFor='street-address'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Address
                      </label>
                      <TextField
                        type='text'
                        name='address'
                        id='address'
                        autoComplete='street-address'
                        className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        value={address}
                        onChange={(e)=>{
                          setAddress(e.target.value)
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
                        htmlFor='city'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Phone Number
                      </label>
                      <TextField
                        type='text'
                        name='phoneNo'
                        id='phoneNo'
                        autoComplete='address-level2'
                        className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        value={phone}
                        onChange={(e)=>{
                          setPhone(e.target.value)
                        }}
                      />
                    </div>

                    <div className='col-span-6'>
                      <label
                        htmlFor='city'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        Password
                      </label>
                      <TextField
                        type='password'
                        name='phoneNo'
                        id='phoneNo'
                        autoComplete='address-level2'
                        className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        value={password}
                        onChange={(e)=>{
                          setPassword(e.target.value)
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
                    onClick={handleSubmit}
                    variant="contained"
                    type='submit'
                    className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                  >
                    Submit
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
