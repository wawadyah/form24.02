import React from 'react'
import profile from '../../../../public/images/killua.png';
import { Link } from '@inertiajs/react';

const FormSection = ({ forms }) => {
    console.log('ini dari form', forms)
return(
    <>
    <div  className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
        <div className=' gap-3 w-full bg-blue-100 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5'>
        {forms.map((data, index) => (
            <Link href={'/form/a/' + data.uuid} key={index} className='bg-green-200 p-4'>
                <img src={profile} alt="cover" className='rounded-lg' />
                <div className='rounded-lg bg-red-100 mt-2 text-[20px] font-bold'>
                    {data.title}
                </div>
                <div className='text-[12px] text-gray-500'>
                    {data.desc}
                </div>
            </Link>
        ))}
        </div>
    </div>
    </>
)
}
export default FormSection