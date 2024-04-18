import React from 'react'
import { SiGoogleforms } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";

const FormInfo = ({ props }) => {
  return (
    <div className="my-4 grid grid-cols-3 gap-16 py-8 md:px-20 lg:px-32 xl:px-40 bg-blue-400">

        <div className=' grid grid-cols-2 border-gray-100 border-r gap-6  px-20'>
            <FaUser className='md:w-30 md:h-30 w-20 h-20 col-span-1 place-self-end text-gray-700  '/>
             <div className=' self-center text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.userCount}</p>
                <p className='font-semibold md:text-xl' >User</p>
            </div>
        </div>

        <div className=' grid grid-cols-2 border-gray-100 border-r gap-6  px-20'>
            <HiOutlinePencilAlt className='md:w-30 md:h-30 w-20 h-20 place-self-end text-gray-700  '/>
             <div className=' self-center text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.responsesCount}</p>
                <p className='font-semibold md:text-xl' >Responses</p>
            </div>
        </div>

        <div className=' grid grid-cols-2 gap-6  px-20'> 
            <SiGoogleforms className='md:w-30 md:h-30 w-20 h-20 place-self-end text-gray-700 '/>
             <div className=' self-center text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.formCount}</p>
                <p className='font-semibold md:text-xl' >Form</p>
            </div>
        </div>
            </div> 
  )
}

export default FormInfo