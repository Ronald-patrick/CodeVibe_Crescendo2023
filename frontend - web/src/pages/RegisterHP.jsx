import React from "react";

import { useFormik } from "formik";
import * as yup from "yup";

import { Button, TextField } from "@mui/material";


const validationSchema = yup.object({
  hp_id: yup.string("Enter your hp_id").required("hp_id is required"),
  name: yup.string("Enter your name").required("name is required"),
  address: yup.string("Enter your address").required("address is required"),
  phoneNo: yup
    .string("Enter your Phone No")
    .matches(/^[6-9]\d{9}$/, {
      message: "Please enter valid number.",
      excludeEmptyString: false,
    })
    .required("Phone No required")
    .min(10, "too short")
    .max(10, "too long"),
});
const RegisterHP = () => {
  const formik = useFormik({
    initialValues: {
      hp_id: "",
      name: "",
      address: "",
      phoneNo: "",
    },
    validationSchema: validationSchema,
  });
  return (
    <>
      <div className='mt-10 sm:mt-0'>
        <div className='md:grid md:grid-cols-3 md:gap-6 border-'>
          <div className='px-6 sm:px-0'>
            <h3 className='px-6 before:text-base font-semibold leading-6 text-gray-900'>
              Healthcare Provider Information
            </h3>
          </div>
          <div className=' md:col-span-1 '></div>
          <div className='mt-5 md:col-span-2 md:mt-0'>
            <form onSubmit={formik.handleSubmit} className='form'>
              <div className='overflow-hidden shadow sm:rounded-md'>
                <div className='bg-white px-4 py-5 sm:p-6'>
                  <div className='grid grid-cols-6 gap-6'>
                    <div className='col-span-6 sm:col-span-3'>
                      <label
                        htmlFor='first-name'
                        className='block text-sm font-medium leading-6 text-gray-900'
                      >
                        hp_id
                      </label>

                      <TextField
                        type='text'
                        name='hp_id'
                        id='hp_id'
                        value={formik.values.hp_id}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.hp_id && Boolean(formik.errors.hp_id)
                        }
                        helperText={formik.touched.hp_id && formik.errors.hp_id}
                        autoComplete='given-name'
                        className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    <div className='col-span-6 sm:col-span-3'>
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
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                        className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                    <div className='col-span-6'>
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
                        onChange={formik.handleChange}
                        error={
                          formik.touched.address &&
                          Boolean(formik.errors.address)
                        }
                        helperText={
                          formik.touched.address && formik.errors.address
                        }
                        autoComplete='street-address'
                        className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>

                    <div className='col-span-6 sm:col-span-6 lg:col-span-2'>
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
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phoneNo &&
                          Boolean(formik.errors.phoneNo)
                        }
                        helperText={
                          formik.touched.phoneNo && formik.errors.phoneNo
                        }
                        autoComplete='address-level2'
                        className='mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 px-4 py-3 text-right sm:px-6'>
                  <button
                    type='submit'
                    className='inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterHP;
