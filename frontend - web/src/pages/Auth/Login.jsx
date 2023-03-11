import React from 'react'
import NavBasic from '../../components/NavBasic'


const Login = () => {
  return (
    <>

      <NavBasic />

      <div className="container mx-auto h-[94h]">

        <div className="mt-6 px-12 sm:px-12 md:px-48 lg:px-24 lg:my-24 xl:px-24 xl:max-w-2xl mx-auto">
          <h2 className="text-center  text-4xl text-primary font-semibold lg:text-left xl:text-5xl
xl:text-bold"><div className="inline-block  border-primary ">Log in
            </div>
          </h2>
          <div className="mt-12">
            <form>
              <div>
                <div className="py-2 text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                <input className="w-full text-lg py-2 px-4 rounded-full border border-grey-700 focus:outline-none focus:border-indigo-500" type="" placeholder="Type email-address ..." />
              </div>
              <div className="mt-6">
                <div className="flex justify-between items-center">
                  <div className="py-2 text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a className="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                    cursor-pointer">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input className="w-full text-lg py-2 px-4 rounded-full border border-grey-700 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your password" />
              </div>
              <div className="mt-10">
                <button className="bg-primary text-gray-100 p-4 w-full rounded-full tracking-wide
            font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
            shadow-lg">
                  Log In
                </button>
              </div>
            </form>
            <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ? <a className="cursor-pointer text-indigo-600 hover:text-indigo-800">Sign up</a>
            </div>
          </div>
        </div>
      </div>

    </>

  )
}

export default Login
