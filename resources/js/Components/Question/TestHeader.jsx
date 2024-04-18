import React, { useEffect, useState } from 'react';
import { BsFillFileEarmarkBreakFill, BsFillFileEarmarkPlusFill } from 'react-icons/bs'
import { FaPalette } from 'react-icons/fa'
import { FaEye } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";




const TestHeader = ( { props, view, activeView } ) => {
    const uuid = props.form.uuid;
    console.log('ini dari header',uuid)


  return (
    <>
        <div className='pb-2 relative px-16 bg-white '>
            <div className='pb-4 flex justify-between pt-4 '>
                <div className='left-section flex items-center'>
                    <BsFillFileEarmarkPlusFill className=' text-primary text-[50px]' />
                    <p className='ml-4 font-bold text-2xl'>Form</p>
                </div>

                <div className='right-section  relative flex items-center text-gray-600 gap-8 text-[24px]'>
                    
                    <div className='hover:bg-gray-100 p-4 rounded-full cursor-pointer'>
                        <FaPalette />
                    </div>
                    <div className='hover:bg-gray-100 p-4 rounded-full cursor-pointer'>
                         <FaEye />
                    </div>
                    
                    <div className='hover:bg-gray-100 p-4 rounded-full'>
                        <BsThreeDotsVertical className='text-[20px] ' />
                    </div>

                    
                </div>
            </div>
            
            <div
                className={`w-full font-semibold grid grid-cols-2 relative after:w-[50%] after:h-[6px] 
                after:bg-primary after:absolute after:-bottom-2 after:rounded-t-md 
                ${activeView !== 'response' ? 'after:right-0' : ''} after:transition-all after:duration-800 after:ease-in-out `}
            >
                <button onClick={() => view('response')} 
                className={activeView === 'response' ? 'text-primary' : ''}
                >Question</button>
                <button onClick={() => view('chart')}
                className={activeView === 'chart' ? 'text-primary' : ''}
                >
                Response</button>
            </div>


        </div>
    </>
  )
}

export default TestHeader