import {Link} from 'react-router-dom';


const SearchPatientList = () => {
    return (
        <>
            <div class="bg-white  pt-0 pr-0 pb-0 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-6">
                <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">
                        <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p class="text-xl font-bold text-gray-900">Patient's List</p>
                                {/* <p class="text-sm mt-1 mr-0 mb-0 ml-0 font-semi-bold text-gray-500">Lorem ipsum dolor sit amet, consectetur
              adipis</p> */}
                            </div>
                            <div class="mt-4 mr-0 mb-0 ml-0 sm:mt-0">
                                <p class="sr-only bg-black">Search Patients</p>
                                <div class="relative">
                                    <div class="flex items-center pt-0 pr-0 pb-0 pl-3 absolute inset-y-0 left-0 pointer-events-none">
                                        <p>
                                            <svg class="w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21
                    21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                                        </p>
                                    </div>
                                    <input placeholder="Search Patient " type="search" class="border block pt-2 pr-0 pb-2 pl-10 w-full py-2
                 rounded-lg focus:border-gray-600 sm:text-sm"/>
                                </div>
                            </div>
                        </div>
                    
                        <div class="border-2 border-violet-300 shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                            <div class="pt--10 pr-0 pb-10 pl-0">
                                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                    <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                        <div class="flex items-center flex-1 min-w-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                            </svg>

                                            <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                <p class="text-lg font-bold text-gray-800 truncate">Mukesh Ambani</p>
                                                {/* <p class="text-gray-600 text-md">Slack</p> */}


                                            </div>
                                        </div>
                                        <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                            <Link to = '/patientProfile_1' class=" bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">View
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg> */}
                                            </Link>

                                        </div>
                                    </div>
                                </div>


                                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                    <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                        <div class="flex items-center flex-1 min-w-0">
                                            {/* <img src="https://www.growthmarketingpro.com/wp-content/uploads/2019/10/basecamp-logo.png"
                                                class="flex-shrink-0 object-cover rounded-full btn- w-10 h-10" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                            </svg>
                                            <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                <p class="text-lg font-bold text-gray-800 truncate">Mahatma Gandhi</p>
                                                {/* <p class="text-gray-600 text-md">Basecamp</p> */}
                                            </div>
                                        </div>
                                        <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:justify-end
                  sm:mt-0">
                                            <a href="" class="bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">View</a>
                                        </div>
                                    </div>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchPatientList
