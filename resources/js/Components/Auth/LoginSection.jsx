import { router } from '@inertiajs/react';
import React, { useState } from 'react'

const LoginSection = () => {

  const [name, setName]= useState('');
  const [password,setPass] = useState('');
  

  const saveData = (e) => {
    e.preventDefault();
    router.post('/store-auth', { name, password }); 
  }
  return (
    <div className='px-14 w-[50%]'>


      
        <div className=''>
            <label htmlFor="name" className='block font-semibold'>name</label>
            <input type="text" 
             name='name'
             value={name} onChange={e=>setName(e.target.value)} 
            className='block shadow-xl rounded-2xl border-none w-full text-gray-900 bg-gray-50  
            appearance-none focus:outline-none focus:ring-0 focus:shadow-inner peer' placeholder='name' />
        </div>
        
        <div className='mt-2'>
            <label htmlFor="password" className='block font-semibold'>password</label>
            <input type="password" 
            value={password} onChange={e=>setPass(e.target.value)}
            className='block shadow-xl rounded-2xl border-none w-full text-gray-900 bg-gray-50  
            appearance-none focus:outline-none focus:ring-0 focus:shadow-inner peer' placeholder='password'/>
        </div>
        <button className='mt-4 bg-blue-600 w-full text-[20px] text-white font-semibold 
        hover:bg-blue-200 hover:text-gray-400 rounded-2xl py-1.5 transition duration-150 '  onClick={saveData}>Submit</button>
    </div>
  )
}

export default LoginSection