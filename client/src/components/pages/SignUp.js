import React from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import summaryApi from '../../common';

import {toast} from 'react-toastify';
const SignUp = () => {
    const [showPassword, setPassword]=useState(false);
    const [showConfirmPassword, setConfirmPassword]=useState(false);
     const [data, setData] = useState({
            email: "",
            password: "",
            name: "",
            confirmPassword: ""
        })
        const navigate = useNavigate();
        const handleOnChange = (e) => {
            const {name,value}=e.target
            setData((preve)=>{
                return{
                    ...preve,
                    [name]:value 
                }
            })
            }
            const handleSubmit = async(e) => {
                e.preventDefault();

                if(data.password === data.confirmPassword){
                    const dataResponse = await fetch(summaryApi.signUp.url,{
                        method: summaryApi.signUp.method,
                        headers: {
                            'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(data),
                    })
                    const dataApi = await dataResponse.json();
                    if(dataApi.success){
                        toast.success(dataApi.message)
                        navigate('/login')
                    }
                    if(dataApi.error){
                        toast.error(dataApi.message)
                        }
                    console.log("data", dataApi);
                } else{
                    alert("Password and Confirm Password does not match");
                }
    
                }
  return (
    <>
    <div className='mx-auto container p-4'>
    <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
        <div>
            <h1 className='text-3xl font-bold text-center pb-5'>SignUp</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='grid'>
               <label >Name:</label>
               <div className="bg-slate-100 p-2">
                <input className=" outline-none w-full h-full bg-transparent" type="text" name="name" placeholder="Enter your name"
                value={data.name} 
                onChange={handleOnChange}/>
               </div>
            </div>
            <div className='grid'>
               <label >Email:</label>
               <div className="bg-slate-100 p-2">
                <input className=" outline-none w-full h-full bg-transparent" type="email" name="email" placeholder="Enter your email"
                value={data.email} 
                onChange={handleOnChange}/>
               </div>
            </div>
            <div>
                <label>Password:</label>
                <div className="bg-slate-100 flex p-2">
                    
                <input type={showPassword ? "text":"password"} className=" outline-none w-full h-full bg-transparent" name="password" placeholder="Enter password"
                value={data.password} 
                onChange={handleOnChange}/>
                <div className='cursor-pointer text-lg' onClick={()=>setPassword((preve)=>!preve)}>
                <span>
                    {
                        showPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                </span>
                </div>
                </div>
                </div>

                <div>
                <label>Confirm Password:</label>
                <div className="bg-slate-100 flex p-2">
                    
                <input type={showConfirmPassword ? "text":"password"} className=" outline-none w-full h-full bg-transparent" name="confirmPassword" placeholder="Enter Confirm password"
                value={data.confirmPassword} 
                onChange={handleOnChange}/>
                <div className='cursor-pointer text-lg' onClick={()=>setConfirmPassword((preve)=>!preve)}>
                <span>
                    {
                        showConfirmPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                </span>
                </div>
                </div>
                </div>

            <button className=' bg-red-500 text-white px-6 rounded-md mt-4 pb-1 hover:scale-110 transition-all mx-auto block hover:bg-red-600'>SignUp</button>
        </form>
        <p className='mt-4'>Already have an account?  <Link to={"/login"} className='text-red-500 hover:text-red-700 hover:underline'>Login</Link></p>
    </div>
    </div>
    
    </>
  )
}

export default SignUp