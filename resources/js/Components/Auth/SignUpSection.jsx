import React from 'react'

const SignUpSection = () => {
  return (
    <div className='px-14 w-[50%]'>
        <p>signup</p>
        <div className=''>
            <label htmlFor="name" className='block font-semibold'>email</label>
            <input type="text" className='block shadow-xl rounded-2xl border-none w-full text-gray-900 bg-gray-50  
            appearance-none focus:outline-none focus:ring-0 focus:shadow-inner peer' placeholder='email' />
        </div>
        <div className='mt-2'>
            <label htmlFor="name" className='block font-semibold'>password</label>
            <input type="text" className='block shadow-xl rounded-2xl border-none w-full text-gray-900 bg-gray-50  
            appearance-none focus:outline-none focus:ring-0 focus:shadow-inner peer' placeholder='password'/>
        </div>
        <button className='mt-4 bg-blue-400 w-full text-[20px] text-gray-700 font-semibold 
        hover:bg-blue-200 hover:text-gray-400 rounded-2xl py-1.5'>Submit</button>
    </div>
  )
}

export default SignUpSection