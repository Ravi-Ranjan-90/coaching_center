import React, { useContext } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import summaryApi from '../../common';
import { useNavigate } from 'react-router-dom';
import Context from '../../context';
const Login = () => {
    const [showPassword, setPassword]=useState(false);
    const navigate=useNavigate()
    const {fetchUserDetails} = useContext(Context)
    console.log("generalContext",fetchUserDetails)
    const [data, setData] = useState({
        email: "",
        password: "",
    })
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
        
            try {
                const dataResponse = await fetch(summaryApi.signIn.url, {
                    method: summaryApi.signIn.method,
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });
        
                if (!dataResponse.ok) {
                    throw new Error("Failed to fetch API. Status: " + dataResponse.status);
                }
        
                const dataApi = await dataResponse.json();
        
                if (dataApi.success) {
                    toast.success(dataApi.message);
                   
                    navigate('/')
                    fetchUserDetails()
                    // navigate('/dashboard'); // Uncomment after implementing navigation
                } else {
                    toast.error(dataApi.message);
                }
            } catch (error) {
                console.error("Fetch error:", error);
                toast.error("Failed to connect to the server. Please try again later.");
            }

            }
  return (
    <>
    <div className='mx-auto container p-16'>
    <div className='bg-white p-2 py-5 w-full max-w-md mx-auto'>
        <div>
            <h1 className='text-3xl font-bold text-center pb-5'>Login</h1>
        </div>
        <form className='pt-4' onSubmit={handleSubmit}>
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
                    
                <input type={showPassword ? "text":"password"} 
                 value={data.password} 
                 onChange={handleOnChange}
                 className=" outline-none w-full h-full bg-transparent" name="password" placeholder="Enter your password"/>
                <div className='cursor-pointer text-lg' onClick={()=>setPassword((preve)=>!preve)}>
                <span>
                    {
                        showPassword ? <FaEyeSlash/> : <FaEye/>
                    }
                </span>
                </div>
                </div>
                </div>
                <Link to={"/forgot-password"} className="block w-fit ml-auto hover:underline hover:text-red-600">Forgot-Password?</Link>
            <button className=' bg-red-500 text-white px-6 rounded-md mt-4 pb-1 hover:scale-110 transition-all mx-auto block hover:bg-red-600'>Login</button>
        </form>
        <p className='mt-4'>Don't have account?  <Link to={"/signup"} className='text-red-500 hover:text-red-700 hover:underline'>Sign Up</Link></p>
    </div>
    </div>
    
    </>
  )
}

export default Login