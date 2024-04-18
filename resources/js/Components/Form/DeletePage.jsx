import React from 'react'
import { Link } from '@inertiajs/react';

const DeletePage = ({ destroy, i, data }) => {
  return (
    <div className='fixed inset-x-0 inset-y-0 flex items-center justify-center z-50 '>

      <div className='bg-white w-1/4 h-fit py-4 rounded-xl shadow-current'>
        <p className='text-center font-bold text-xl mb-10'>want to delete this form?</p>
        <div className=' gap-8 flex justify-center'>
          <Link className='bg-blue-400 hover:bg-blue-200  text-white font-semibold text-lg px-4 rounded-lg'
           href={'/delete/' + data} >Sure</Link>
          <button className='bg-red-400 text-white hover:bg-red-200  font-semibold text-lg px-4 rounded-lg' 
          onClick={destroy}>No</button>
        </div>
      </div>
    </div>
  )
}

export default DeletePage