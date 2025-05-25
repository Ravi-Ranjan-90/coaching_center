import React from 'react'
import { useState } from 'react';
import {useSelector } from 'react-redux';
import UploadDetails from '../UploadDetails';
export const AdminPanel = () => {
    const user = useSelector((state) => state?.user?.user);
    const [openUploadDetails, setUploadDetails] = useState(false);
  return (
    <div className='min-h-[calc(100vh-120px)] flex'>
        <aside className='bg-white min-h-full w-full max-w-60'>
        <div className="flex items-center justify-center p-4">
            <h3 className="font-bold text-center">Hi, {user.name}</h3>
        </div>
        <div className="flex items-center justify-center">
            <h3 className="font-semibold text-center">{user.role}</h3>
        </div>
        </aside>
        <main>
          <button className='border-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition-all rounded-md' onClick={()=>setUploadDetails(true)}>Upload Details</button>
          <div>
            {
              openUploadDetails && <UploadDetails onClose={() => setUploadDetails(false)} />
            }
          </div>
        </main>
    </div>
  )
}
