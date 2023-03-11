import React,{Component} from "react";
// import pdf from "../assets/MeetResume.pdf"

function openClick(){
    window.open("https://www.africau.edu/images/default/sample.pdf")
}


function ReportList() {
  return (
    <>
     <div className="container my-10">

      <div className='max-w-2xl mx-auto'>
        <div className='flex flex-col'>
          <div className='overflow-x-auto shadow-md sm:rounded-lg'>
            <div className='inline-block min-w-full align-middle'>
              <div className='overflow-hidden '>
                <table className='min-w-full divide-y divide-primary table-fixed dark:divide-primary'>
                  <thead className='bg-primary dark:bg-grey-100'>
                    <tr>
                      <th scope='col' className='p-4'></th>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase'
                      >
                        Report 
                      </th>
                     
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase '
                      >
                        Date
                      </th>
                      <th
                        scope='col'
                        className='py-3 px-6 text-xs font-medium tracking-wider text-left text-white uppercase '
                      >
                        View
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-primary  dark:divide-primary'>
                    <tr className='hover:bg-gray-100 '>
                      <td className='p-4 w-4'></td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap text-black'>
                        X-Ray
                      </td>
                      
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap text-black'>
                       07-11-2022
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-primary  dark:text-primary hover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 '>
                      <td className='p-4 w-4'></td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap text-black'>
                        CT-Scan
                      </td>
                      
                      <td className='py-4 px-6 text-sm font-medium whitespace-nowrap text-black'>
                      21-01-2022
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-primary  dark:text-primaryhover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 '>
                      <td className='p-4 w-4'></td>
                      <td className='py-4 px-6 text-sm font-medium whitespace-nowrap text-black'>
                        MRI Scan
                      </td>
                      
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap text-black'>
                      19-12-2022
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-primary  dark:text-primaryhover:underline'
                        >
                          View
                        </a>
                      </td>
                    </tr>
                    <tr className='hover:bg-gray-100 '>
                      <td className='p-4 w-4'>
                        <div className='flex items-center'></div>
                      </td>
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-black'>
                        ElectroCardioGraph
                      </td>
                     
                      <td className='py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap text-black'>
                        21-01-2023
                      </td>
                      <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                        <a
                          href='#'
                          className='text-primary  dark:text-primaryhover:underline'
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
     </div>

    </>
  );
}

export default ReportList;