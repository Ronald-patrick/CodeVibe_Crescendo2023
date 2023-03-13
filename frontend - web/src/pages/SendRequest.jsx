import axios from "axios"
import { useState } from "react"

const SendRequest = () => {
    const [id, setId] = useState("")
    const SendRequest = async() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
          };
        const res = await axios.post("http://localhost:5000/api/provider/add-request",{
            id : id
        },config)

        console.log(res);

        if(res.status === 200){
            setId("")
            alert("Request Sent")
        }
    }
    return (
        <>
            <div class="bg-white -lime-700 pt-12 pr-0 pb-12 pl-0 mt-0 mr-auto mb-0 ml-auto sm:py-16 lg:py-20">
                <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-7xl sm:px-6 lg:px-8">
                    <div class="pt-0 pr-4 pb-0 pl-4 mt-0 mr-auto mb-0 ml-auto max-w-4xl sm:px-6 lg:px-8">



                        <div class="border-2 border-gray-300 shadow-xl mt-8 mr-0 mb-0 ml-0 pt-4 pr-10 pb-4 pl-10 flow-root rounded-lg sm:py-2">
                            <div class="pt--10 pr-0 pb-10 pl-0">
                                <div class="pt-5 pr-0 pb-0 pl-0 mt-5 mr-0 mb-0 ml-0">
                                    <div class="sm:flex sm:items-center sm:justify-between sm:space-x-5">
                                        <div class="flex items-center flex-1 min-w-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                                <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                            </svg>

                                            <div class="mt-0 mr-0 mb-0 ml-4 flex-1 min-w-0">
                                                <input value={id} onChange={(e) => {
                                                    setId(e.target.value)
                                                }} placeholder="Enter Id of Patient " className="outline-none border-2 w-[350px] p-2 rounded-md" type="text" />
                                                {/* <p class="text-gray-600 text-md">Slack</p> */}


                                            </div>
                                        </div>
                                        <div class="mt-4 mr-0 mb-0 ml-0 pt-0 pr-0 pb-0 pl-14 flex items-center sm:space-x-6 sm:pl-0 sm:mt-0">
                                            <button onClick={SendRequest} class=" bg-gray-800 pt-2 pr-6 pb-2 pl-6 text-lg font-medium text-gray-100 transition-all
                    duration-200 hover:bg-gray-700 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                                </svg>


                                            </button>

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

export default SendRequest
