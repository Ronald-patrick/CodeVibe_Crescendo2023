import React from 'react'

const PatientDetailsCard = ({ name="John Doe",
email="johndoe@example.com",
phone="(123) 456-7890",
dob="January 1, 1990",
aadhaar="828372627384",
address="B/4 Raj Apt, Achole road, Bandra (East) ",
state="Maharastra",
zipcode="301209"
}) => {
    return (
        <>
             <div className="bg-white shadow-xl rounded border-[1px] border-gray-300 px-8 pt-6 pb-8 mb-4 flex flex-col my-2 mx-auto max-w-md">
      <div className="mb-4">
        <h1 className="text-gray-900 font-bold text-2xl mb-2">{name}</h1>
        <p className="text-gray-600 text-lg">{email}</p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <p className="text-gray-700">{phone}</p>
        </div>
        <div className="md:w-1/2 mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
            Date of Birth
          </label>
          <p className="text-gray-700">{dob}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Email Address
          </label>
          <p className="text-gray-700">{email}</p>
        </div>
        <div className="md:w-1/2 mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
           UUID (Aadhaar)
          </label>
          <p className="text-gray-700">{aadhaar}</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className=" mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Address
          </label>
          <p className="text-gray-700">{address}</p>
        </div>
       
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
          State / Province
          </label>
          <p className="text-gray-700">{state}</p>
        </div>
        <div className="md:w-1/2 mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="dob">
           Zip Code
          </label>
          <p className="text-gray-700">{zipcode}</p>
        </div>
      </div>
    </div>
        </>
    )
}

export default PatientDetailsCard
