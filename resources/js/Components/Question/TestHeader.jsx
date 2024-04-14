import React, { useEffect, useState } from 'react';
import { BsFillFileEarmarkBreakFill, BsFillFileEarmarkPlusFill } from 'react-icons/bs'
import { FaPalette } from 'react-icons/fa'
import { FaEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from '@inertiajs/react';
import FormResponse from '@/Pages/FormResponse';



const TestHeader = ( { props, submit } ) => {
    const uuid = props.form.uuid;
    console.log('ini dari header',uuid)
    const [responses, setResponses] = useState([]);
  // Gunakan useEffect untuk mengambil data respons dari backend atau inisialisasi data respons

  useEffect(() => {
    // Contoh penggunaan useEffect untuk mengambil data respons dari backend
    // Gantilah kode berikut dengan kode yang mengambil data respons dari backend
    const fetchResponses = async () => {
      try {
        // Lakukan panggilan API atau lakukan manipulasi state lainnya
        // Misalnya, setResponses dengan data yang diambil dari backend
        const responseData = await fetchDataFromBackend();
        setResponses(responseData);
      } catch (error) {
        console.error('Error fetching responses:', error);
      }
    };

    fetchResponses();
  }, []);

  window.addEventListener('hashchange', function() {
    if (window.location.hash === '#response') {
        // Lakukan tindakan yang sesuai ketika hash berubah menjadi #response
        // Misalnya, gulir halaman ke komponen respons
        const responseElement = document.getElementById('response');
        if (responseElement) {
            responseElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});


  return (
    <>
        <div className='relative px-16 bg-white '>
            <div className=' pb-8 flex justify-between pt-4 '>
                <div className='left-section flex items-center'>
                    <BsFillFileEarmarkPlusFill className=' text-primary text-[50px]' />
                    <p className='ml-4 text-[16px]'>Formulir tanpa judul sya</p>
                </div>

                <div className='right-section  relative flex items-center text-gray-600 gap-8 text-[24px]'>
                    
                    <div className='hover:bg-gray-100 p-4 rounded-full cursor-pointer'>
                        <FaPalette />
                    </div>
                    <div className='hover:bg-gray-100 p-4 rounded-full cursor-pointer'>
                         <FaEye />
                    </div>
                    <div>
                        <button className='bg-primary rounded-md px-6 py-2 text-[15px] text-white text-semibold' onClick={submit}>Submit</button>
                    </div>
                    <div className='hover:bg-gray-100 p-4 rounded-full'>
                        <BsThreeDotsVertical className='text-[20px] ' />
                    </div>

                    
                </div>
            </div>
            
            <div className='w-full font-semibold  bg-blue-100 flex justify-center gap-12'>
                <button className=''>Question</button>
                <Link href="#response" className="block mb-4 text-blue-500 hover:underline">
                    Jump to Responses
                    </Link>
        
                {/* Komponen formResponse */}
                {/* <FormResponse responses={responses} /> */}
            </div>


        </div>
    </>
  )
}

export default TestHeader