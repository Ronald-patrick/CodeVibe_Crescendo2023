import { RocketLaunch } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='shadow-md'>
      <div className='flex justify-between p-4 max-w-7xl mx-auto'>
        <div className='flex items-center gap-2 text-[25px] text-primary font-semibold'>
          <RocketLaunch style={{ width: 35, height: 35 }} />
          CodeVibe
        </div>

        <div className='flex items-center text-primary gap-2'>
          <div>
            <button className='w-[100px] bg-white h-[40px] text-lg font-semibold'>
              Solutions
            </button>
            <button className='w-[100px] bg-white h-[40px] text-lg font-semibold'>
              Pricing
            </button>
            <button className='w-[100px] bg-white h-[40px] text-lg font-semibold'>
              Docs
            </button>
          </div>

          <Link to='/login'>
            <Button variant='contained'>Login</Button>
          </Link>
          <Link to='/registerhp'>
            <Button>Signup</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
