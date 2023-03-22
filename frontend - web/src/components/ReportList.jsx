import Button from "@mui/material/Button";
import React from "react";
// import pdf from "../assets/MeetResume.pdf"
import { useNavigate } from 'react-router-dom';

function openClick() {
  window.open("https://www.africau.edu/images/default/sample.pdf")
}


function ReportList({ data }) {
  console.log(data);

  const navigate = useNavigate();

  const checkReport = (d)=>{
    navigate("/reportDetail",{
      state : d
    })
    
  }

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
                          Report By
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

                      { data.reports.map((d,i) => (
                        <tr key={i} className='hover:bg-gray-100 '>
                          <td className='p-4 w-4'></td>
                          <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap text-black'>
                            {d.reportBy}
                          </td>

                          <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap text-black'>
                          {d.date}
                          </td>
                          <td className='py-4 px-6 text-sm font-medium  whitespace-nowrap'>
                            <Button
                              variant="contained"
                              className='text-primary  dark:text-primary hover:underline'
                              onClick={()=>{
                                checkReport(d)
                              }}
                            >
                              View
                            </Button>
                          </td>
                        </tr>
                      ))}


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
