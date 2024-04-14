import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const SignUpSection = () => {

const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPass] = useState('');


const saveData = (e) => {
  e.preventDefault();
  router.post('/saving', { name, password, email }); 
  // window.location.reload();
}

  return (
    <div className='px-14 w-[50%]'>
        {/* <div className='grid place-items-center font-bold text-[30px]'>Hello</div> */}
        <div className=''>
            <label htmlFor="name" className='block font-semibold'>name</label>
            <input  
            value={name} onChange={e=>setName(e.target.value)} 
            type="text" className='block shadow-xl rounded-2xl border-none w-full text-gray-900 bg-gray-50  
            appearance-none focus:outline-none focus:ring-0 focus:shadow-inner peer' placeholder='email' />
        </div>
        <div className=''>
            <label htmlFor="name" className='block font-semibold'>email</label>
            <input 
            value={email} onChange={e=>setEmail(e.target.value)} 
            type="text" className='block shadow-xl rounded-2xl border-none w-full text-gray-900 bg-gray-50  
            appearance-none focus:outline-none focus:ring-0 focus:shadow-inner peer' placeholder='email' />
        </div>
        <div className='mt-2'>
            <label htmlFor="name" className='block font-semibold'>password</label>
            <input 
            value={password} onChange={e=>setPass(e.target.value)} 
            type="password" className='block shadow-xl rounded-2xl border-none w-full text-gray-900 bg-gray-50  
            appearance-none focus:outline-none focus:ring-0 focus:shadow-inner peer' placeholder='password'/>
        </div>
        <button className='mt-4 bg-blue-600 w-full text-[20px] text-white font-semibold 
        hover:bg-blue-200 hover:text-gray-400 rounded-2xl py-1.5 transition duration-150 ' onClick={saveData}>Submit</button>
    </div>
  )
}

export default SignUpSection