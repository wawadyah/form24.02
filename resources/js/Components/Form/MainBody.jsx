import { Link } from '@inertiajs/react'
import React from 'react'
import { BsFillFileEarmarkPlusFill} from "react-icons/bs";
import { SiGoogleforms } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import FormSection from './FormSection';

const MainBody = ({ uuid, forms }) => {

    const handleNavigate = () => {
        Link.visit(`/form/${uuid}`);
    };

  return(
   <div className=" px-10 md:px-24">
        <div className=" py-6">
            <div className="mb-4 grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-2 bg-lime-400">
                <div  
                    className="flex gap-2 border bg-white border-white active:bg-gray-100 hover:border-blue-800 p-4  md:p-4 cursor-pointer rounded-md shadow-lg"
                >
                    <div className='bg-blue-100 basis-1/4'>
                        <FaUser className='w-full h-full text-gray-700'/>
                    </div>
                    <div className='bg-blue-100 basis-2/3'>
                        <p className='font-bold md:text-[15px] text-[12px]'>User</p>
                        <p className='font-semibold md:text-[22px]' >26</p>
                    </div>
                </div>
               
                <div  
                    className="flex gap-2 border bg-white border-white active:bg-gray-100 hover:border-blue-800  p-4 cursor-pointer rounded-md shadow-lg"
                >
                    <div className='bg-blue-100 basis-1/4'>
                        <SiGoogleforms className='w-full h-full text-gray-700'/>
                    </div>
                    <div className='bg-blue-100 basis-2/3'>
                        <p className='font-bold text-[15px]'>Form</p>
                        <p className='font-semibold text-[22px]' >26</p>
                    </div>
                </div>

                <div  
                    className="flex gap-2 border bg-white border-white active:bg-gray-100 hover:border-blue-800 p-4 cursor-pointer rounded-md shadow-lg"
                >
                    <div className='bg-blue-100 basis-1/4'>
                        <FaUser className='w-full h-full text-gray-700'/>
                    </div>
                    <div className='bg-blue-100 basis-2/3'>
                        <p className='font-bold text-[15px]'>User</p>
                        <p className='font-semibold text-[22px]' >26</p>
                    </div>
                </div>    
            </div>   
        </div>
            <Link onClick={handleNavigate} href={'/form/' + uuid}
                className="border bottom-16 left-12 fixed bg-white p-6 active:bg-gray-100  flex justify-center 
                items-center cursor-pointer rounded-full shadow-md shadow-gray-500/50"
            >
            <FaPlus />
            </Link>
            <FormSection forms={forms} uuid={uuid} />
        
   </div>
)
}

export default MainBody