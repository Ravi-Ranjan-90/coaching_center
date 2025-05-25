import React from 'react'
// import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { setUserDetails } from '../store/userSlice';
import summaryApi from '../common';
import { useState } from 'react';
import { FaRegUserCircle } from "react-icons/fa";
import logo from './Logo1.png';
const Header = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  // console.log("user Header-",user)
  const dispatch = useDispatch()
  const handleLogout = async() => {
    const fetchData = await fetch(summaryApi.logout_user.url, {
      method: summaryApi.logout_user.method,
      credentials: "include",
    })
      const data = await fetchData.json()
      if(data.success){
        toast.success(data.message)
        dispatch(setUserDetails(null))
      }
      if(data.err){
        toast.error(data.message)
      }
  };
  return (
    <>
    <div className="h-16 flex  justify-between px-5 py-4 shadow-md">
        <div className=''>
            <Link to="/">
            <img src={logo} className="w-16 h-10 pt-0 mt-0" alt="Logo"/>
            </Link>
        </div>
        {/* <div className="flex l">
            <div>
            <input  className="rounded-l-lg h-full bg-gray-200 outline-none px-3 "type="text " placeholder='search for coachings...'/>
            </div>
            <div className="pt-2 rounded-r-lg bg-gray-300 px-2"><CiSearch /></div>
        </div> */}
          <div>
        {user ? (
          <>
          <div className='flex gap-4'>
          <div className='relative flex justify-center'>
            <div className=' text-3xl' onClick={()=>setMenuDisplay(prev => !prev)}>
            <FaRegUserCircle />
            </div>
            {/* {
              menuDisplay && (
                <div className='absolute bottom-0 top-12 bg-white h-fit p-2 shadow-lg rounded'>
            <div>
              <Link to={"admin-panel"} className="whitespace-nowrap hover:bg-slate-100 p-2" onClick={()=>setMenuDisplay(prev => !prev)}>Admin Panel</Link>
            </div>
          </div>
              )
            } */}
            {
  menuDisplay && (
    <div className='absolute bottom-0 top-12 bg-white h-fit p-2 shadow-lg rounded'>
      {user && user.role === 'ADMIN' ? (
        <div>
          <Link 
            to="/admin-panel" 
            className="whitespace-nowrap hover:bg-slate-100 p-2 block"
            onClick={() => setMenuDisplay(false)}
          >
            Admin Panel
          </Link>
        </div>
      ) : (
        <div>
          <Link 
            to="/my-bookings" 
            className="whitespace-nowrap hover:bg-slate-100 p-2 block"
            onClick={() => setMenuDisplay(false)}
          >
            My Bookings
          </Link>
        </div>
      )}
       </div>
  )
}
          </div>
            <h3 className="inline-block font-bold  mr-4">Hi, {user.name}</h3>
            <button 
              onClick={handleLogout}
              className="h-full bg-red-500 hover:bg-red-700 text-white font-bold rounded-lg px-2 pb-1"
            >
              Logout
            </button>
            </div>
          </>
        ) : (
          
          <Link to={"/login"} className="h-full bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg px-2 pb-1">
            Login/Signup
          </Link>
        )}
      </div> 
      </div>
    </>
  )
}

export default Header