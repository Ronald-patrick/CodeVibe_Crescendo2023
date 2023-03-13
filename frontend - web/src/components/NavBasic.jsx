import { RocketLaunch } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'

const NavBasic = () => {
    return (
        <header className='shadow-md'>
            <div className='flex justify-between p-4 max-w-7xl mx-auto'>
                <div className='flex items-center gap-2 text-[25px] text-primary font-semibold'>
                    <img className='w-[40px]' src="./logo.png" alt="Logo" />
                    MediVault
                </div>

            </div>
        </header>
    )
}

export default NavBasic