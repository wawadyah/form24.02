import React from 'react'
import { SiGoogleforms } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { HiOutlinePencilAlt } from "react-icons/hi";

const FormInfo = ({ props }) => {
  return (
    <div className="my-4 flex md:gap-14 gap-4 pr-4  py-8 md:px-10 px-5 bg-blue-400 min-w-96">

        <div className='basis-1/3 grid grid-cols-2 border-gray-100 border-r gap-2 '>
            <FaUser className='md:w-20 md:h-fit w-14 h-fit col-span-1 place-self-end text-gray-700  '/>
            <div className=' self-end  text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.userCount}</p>
                <p className='font-semibold md:text-xl' >User</p>
            </div>
        </div>

        <div className='basis-1/3 grid grid-cols-2 border-gray-100 border-r '>
            <HiOutlinePencilAlt className='md:w-30 md:h-30 w-12 h-fit place-self-start text-gray-700  '/>
            <div className=' self-end  text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.responsesCount}</p>
                <p className='font-semibold md:text-xl ' >Responses</p>
            </div>
        </div>

        <div className='basis-1/3 grid grid-cols-2 gap-2'>
            <SiGoogleforms className='md:w-20 md:h-fit w-12 h-fit col-span-1 place-self-end text-gray-700  '/>
            <div className=' self-end  text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.formCount}</p>
                <p className='font-semibold md:text-xl' >Form</p>
            </div>
        </div>
        
        {/* <div className=' grid grid-cols-2 border-gray-100 border-r gap-2 md:gap-6  '>
            <FaUser className='md:w-30 md:h-30 w-14 h-fit col-span-1 place-self-end text-gray-700  '/>
             <div className=' self-end bg-slate-300 text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.userCount}</p>
                <p className='font-semibold md:text-xl' >User</p>
            </div>
        </div>   */}

        {/* <div className=' grid grid-cols-2 border-gray-100 border-r gap-2 md:gap-6  px-20'> 
            <HiOutlinePencilAlt className='md:w-30 md:h-30 w-14 h-fit col-span-1 place-self-end text-gray-700 '/>
             <div className=' self-end text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.responsesCount}</p>
                <p className='font-semibold md:text-xl ' >Response</p>
            </div>
        </div> */}

        {/* <div className=' grid grid-cols-2 border-gray-100 border-r gap-2 md:gap-6  px-20'> 
            <SiGoogleforms className='md:w-30 md:h-30 w-14 h-fit col-span-1 place-self-end text-gray-700 '/>
             <div className=' self-end text-blue-100'>
                <p className='font-bold  md:text-6xl '>{props.formCount}</p>
                <p className='font-semibold md:text-xl' >Form</p>
            </div>
        </div> */}
            </div> 
  )
}

export default FormInfo