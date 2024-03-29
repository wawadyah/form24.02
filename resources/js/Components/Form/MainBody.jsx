import { Link } from '@inertiajs/react'
import React from 'react'
import { BsFillFileEarmarkPlusFill} from "react-icons/bs";
import { SiGoogleforms } from "react-icons/si";
import { FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import FormSection from './FormSection';

const MainBody = ({ uuid, forms }) => {
    console.log('ini dari body', uuid);

    const handleNavigate = () => {
        // Navigasi ke halaman baru menggunakan UUID
        Link.visit(`/form/${uuid}`);
    };

  return(
   <div className=" px-24">
        <div className=" py-5">
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="border bottom-[10px] left-[10px] absolute bg-white p-4 active:bg-gray-100  flex justify-center 
                items-center cursor-pointer rounded-full shadow-lg shadow-gray-500/50"
            >
            <FaPlus />
            </Link>
            <FormSection forms={forms} uuid={uuid} />
        
   </div>
)
}

export default MainBody