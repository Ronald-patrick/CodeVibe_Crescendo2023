import React from 'react'
import { RocketLaunch } from '@mui/icons-material'

const Footer = () => {
    return (
        <footer className='bg-primary py-3 text-[#ffffffc7]'>
            <div className='flex w-[100%] justify-center items-center text-[#ffffffc7] gap-2 text-[25px] font-semibold mb-4'>
                <RocketLaunch style={{ width: 35, height: 35 }} />
                CodeVibe
            </div>
            <hr class="h-px my-8 bg-[#ffffff8a] border-0 "/>

            <div className='w-full flex justify-center items-center '>
                <div className='mr-4'>
                    <h2 className='mb-4'>About Us</h2>
                    <h2>Terms & Conditions</h2>
                </div>
                <div className='h-[10vh] w-[1px] bg-white mx-4'></div>
                <div className='flex-col ml-4'>
                    <h1>Download Mobile App</h1>
                    <div className='flex gap-3 items-center'>
                        <img className='w-[150px]' src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2" alt="Gplay" />
                        <img className='w-[140px]' src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2" alt="Gplay" />
                    </div>
                </div>
            </div>

            <hr class="h-px my-8 bg-[#ffffff8a] border-0 "/>
            <div className='flex w-[100%] justify-center items-center text-[#ffffffc7] mt-4'>
                &copy; 2019-2023 CodeVibe | Crescendo 2k23
            </div>
        </footer>
    )
}

export default Footer