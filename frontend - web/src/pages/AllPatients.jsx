import React from "react";
import Dashboard from "./Dashboard";
import NavBasic from "../components/NavBasic";

function AllPatients() {
  return (
    <> 
      <NavBasic/>
      <Dashboard />
      <div className='flex  m-5 p-5   w-fit border  rounded-lg shadow md:flex-row md:max-w-xl  dark:border-gray-700 border-gray-600'>
        <img
          class=' object-cover w-full rounded-t-lg h-6 md:h-auto md:w-14 md:rounded-none md:rounded-l-lg'
          src='/user.jpg'
          alt=''
        />
        <div className='flex flex-col'>
          <div className='flex ml-4'>
            <div class='flex   justify-start font-medium items-center leading-normal'>
              <h5 class='text-2xl font-medium tracking-tight text-gray-900 mr-3'>
                Patient id :-
              </h5>
              <p class='text-2xl font-medium text-gray-500'>736498</p>
            </div>
          </div>
          <div className='flex ml-4'>
            <div class='flex  justify-start font-medium items-center leading-normal'>
              <h5 class=' text-2xl font-medium tracking-tight text-gray-900 mr-3'>
                Name :-
              </h5>
              <p class='text-2xl font-medium text-gray-500'>Meet Parmar</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllPatients;
