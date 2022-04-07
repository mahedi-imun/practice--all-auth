import { createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
const auth = getAuth()
const SignUp = () => {
    const navigate = useNavigate()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [inputError, setError] = useState('')

    const handleName = (e) => {
        setName(e.target.value);

    }
    const handleEmail = (e) => {
       setEmail(e.target.value);
    }
    const handlePassword = (e) => {

       setPassword(e.target.value);
    }
    const handleConfirmPassWord = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleFormSubmit = (event)=>{
        event.preventDefault()
        if(password.length <6){
            setError(' Password should be at least 6 characters');
            
        }
        else{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
              navigate('/dashboard')
              const user = userCredential.user;
              console.log(user);
              // ...
            })
            .catch((error) => {
          
              console.log(error);
            });
        }
        
       


    }



    return (
        <div>
            <div class="flex items-center justify-center min-h-screen bg-gray-100">
                <div class="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 class="text-2xl font-bold text-center">Join us</h3>
                    <form onSubmit={(event)=>handleFormSubmit(event)} >
                        <div class="mt-4">
                            <div>
                                <label class="block" for="Name">Name</label>
                                <input onBlur={handleName}
                                    type="text"
                                    placeholder="Name"
                                    required
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div class="mt-4">
                                <label class="block" for="email">Email</label>
                                <input onBlur={handleEmail} 
                                type="email" 
                                placeholder="Email"
                                required
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div class="mt-4">
                                <label class="block">Password</label>
                                <input onBlur={handlePassword} type="password" 
                                placeholder="Password"
                                required
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div class="mt-4">
                                <label class="block">Confirm Password</label>
                                <input onBlur={handleConfirmPassWord} type="password" 
                                placeholder="Password"
                                required
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <span class="text-xs text-red-400">{inputError}</span>
                            <div class="flex">
                                <button type='submit' class="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                                    Account</button>
                            </div>
                            <div class="mt-6 text-grey-dark">
                                Already have an account?
                                <NavLink class="text-blue-600 hover:underline" to='/login'>
                                    Log in
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;