import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { getAuth, signOut } from "firebase/auth";
import app from '../../firebase.init';
const auth = getAuth(app);
const Nav = () => {
    const navigate = useNavigate()
    const handleLogout =()=>{

        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/home')
          }).catch((error) => {
            // An error happened.
            console.log(error);

          });

    }
    const location = useLocation()
    return (
        <>
        <nav className=' bg-purple-600 text-white h-16 flex justify-center items-center'>
        <><NavLink className='px-4' to='/home' >Home</NavLink>
            <NavLink className='px-4'  to='/about' >about</NavLink>
            

        </>  
        {
                location.pathname === '/dashboard'? <button onClick={handleLogout}> logout</button> :<NavLink className='px-4 underline'  to='/login' >Log in</NavLink>
            }
            {location.pathname !== "/dashboard" && <> 
            <NavLink className='px-4 bg-black py-2 rounded font-bold'  to='/signup' >SignUp</NavLink></>}
        </nav>
        </>
    );
};

export default Nav;