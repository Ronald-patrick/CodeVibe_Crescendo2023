import React,{Component} from "react";
import pdf from "../assets/MeetResume.pdf"

function openClick(){
    window.open("https://www.africau.edu/images/default/sample.pdf")
}


function ReportList() {
  return (
    <>
      <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col'>
          <div className='overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='inline-block min-w-full align-middle'>
              <div className='overflow-hidden '>
                <table className='min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700'>
                  <thead className='bg-gray-100 dark:bg-gray-700'>
                    <tr>
                      <th scope='col' className='p-4'></th>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                      >
                        Patient Name
                      </th>
                     
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                      >
                        Date
                      </th>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400'
                      >
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700'>
                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='p-4 w-4'></td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Meet
                      </td>
                      
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                       07-11-2022
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-blue-600  dark:text-blue-500 hover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='p-4 w-4'></td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Ronald
                      </td>
                      
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      21-01-2022
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-blue-600  dark:text-blue-500 hover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='p-4 w-4'></td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Raj
                      </td>
                      
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      19-12-2022
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-blue-600  dark:text-blue-500 hover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'></div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Bhavendra
                      </td>
                     
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        21-01-2023
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-blue-600  dark:text-blue-500 hover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 dark:hover:bg-gray-700'>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'></div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        Rohit
                      </td>
                      
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      21-02-2023
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          onClick={openClick}
                          target="_blank"
                          className='text-blue-600  dark:text-blue-500 hover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportList;
