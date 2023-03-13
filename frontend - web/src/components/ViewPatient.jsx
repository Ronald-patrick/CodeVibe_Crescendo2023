import React from "react";

function openClick() {
  window.open("https://www.africau.edu/images/default/sample.pdf");
}
function ViewPatient() {
  return (
    <>
      <div className="container mx-auto w-full border-2">
        <div class='flex justify-center items-center gap-x-20'>
          <div>
            <div className='flex justify-between'>
              <h2 class='text-2xl font-bold mb-4'>Vitals</h2>
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-6 h-6 mb-4'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3'
                  />
                </svg>
              </button>
            </div>

            <div class='grid grid-cols-2 gap-4'>
              <div class='py-6 pl-6 bg-green-100 rounded-xl'>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>BP :-</p>
                  <p className='pl-2'> 120/80</p>
                </div>
              </div>
              <div class='py-6 pl-6 bg-yellow-100 rounded-xl'>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>HR :-</p>
                  <p className='pl-2'> 86 bpm</p>
                </div>
              </div>

              <div class='py-6 pl-6 bg-red-100 rounded-xl'>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>Temp :-</p>
                  <p className='pl-2'> 98.8 F</p>
                </div>
              </div>
              <div class='py-6 pl-6 bg-purple-100 rounded-xl'>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>RR :-</p>
                  <p className='pl-2'> 17 rpm</p>
                </div>
              </div>
              <div class='py-6 pl-6 bg-orange-100 rounded-xl'>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>Height :-</p>
                  <p className='pl-2'> 5'5"</p>
                </div>
              </div>
              <div class='py-6 pl-6 bg-gray-200 rounded-xl'>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>Weight:-</p>
                  <p className='pl-2'> 75 kg</p>
                </div>
              </div>
              <div class='py-6 pl-6 bg-teal-100 rounded-xl '>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>BMI :-</p>
                  <p className='pl-2'> 19.8 rpm</p>
                </div>
              </div>
              <div class='py-6 pl-6 bg-lime-100 rounded-xl'>
                <div class='font-bold flex text-xl text-gray-800 leading-none'>
                  <p>SpO2:-</p>
                  <p className='pl-2'> 99%</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class='text-2xl font-bold mb-4'>Lab Reports</h2>

            <div class='space-y-4'>
              <button
                onClick={openClick}
                className='py-4 pl-4 flex justify-between   w-[300px] text-left  bg-white border hover:bg-blue-100 rounded-xl text-gray-800 space-y-2'
              >
                <div class='mt-2 font-bold '>X Ray</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mr-2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
              <button className='py-4 pl-4 flex justify-between  w-[300px] text-left  bg-white border hover:bg-blue-100 rounded-xl text-gray-800 space-y-2'>
                <div class='mt-2 font-bold '>City Scan</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mr-2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
              <button className='py-4 pl-4 flex justify-between w-[300px] text-left  bg-white border hover:bg-blue-100 rounded-xl text-gray-800 space-y-2'>
                <div class='mt-2 font-bold '>Blood Sugar Report</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mr-2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
              <button className='py-4 pl-4 flex justify-between w-[300px] text-left  bg-white border hover:bg-blue-100 rounded-xl text-gray-800 space-y-2'>
                <div class='mt-2 font-bold '>Blood Pressure</div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke-width='1.5'
                  stroke='currentColor'
                  class='w-6 h-6 mr-2'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default ViewPatient;
