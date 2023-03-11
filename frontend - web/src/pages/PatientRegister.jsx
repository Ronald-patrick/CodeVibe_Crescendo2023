/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import PatientDetails from "./Patient/PatientDetails";
// import Vitals from "./Patients/Vitals";
// import Reports from "./Patients/Reports";


export default function PatientsRegister() {
    return (
        <>
            <div className="p-10 ">
                <PatientDetails />
                {/* <Vitals />
                <Reports /> */}
            </div>
        </>
    )
}
