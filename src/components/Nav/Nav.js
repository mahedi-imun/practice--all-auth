import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
        <nav className=' bg-purple-600 text-white h-16 flex justify-center items-center'>
            <NavLink className='px-4' to='/home' >Home</NavLink>
            <NavLink className='px-4'  to='/about' >about</NavLink>
            <NavLink className='px-4 underline'  to='/login' >Log in</NavLink>
            <NavLink className='px-4 bg-black py-2 rounded font-bold'  to='/signup' >SignUp</NavLink>
        </nav>
        </>
    );
};

export default Nav;