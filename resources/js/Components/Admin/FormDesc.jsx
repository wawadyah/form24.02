import { Link } from '@inertiajs/react';
import React, { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import loader from '../../../../public/images/Spinner@1x-1.0s-200px-200px.svg';
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import DeletePage  from '../../Components/Form/DeletePage'

const FormDesc = ({ form, formResponses }) => {
    const [loading, setIsLoading] = useState(null);
    const [open, setOpen] = useState(null);
    const [deleteForm, setDelete] = useState(null);

    const handleDeleteform = (index) => {
        if(deleteForm === index){
            setDelete(null)
        } else{
            setDelete(index);
        }
    }

    const handleLinkClick = (index) => {
        setIsLoading(index);
    };

    const handleOpen = (index) => {
        if (open === index){
            setOpen(null)
        } else{
            setOpen(index)
        }
        
    } 

    return (
        <>
            
            <div className='font-bold text-2xl text-center mb-2'>Make your form</div>
            <div className='gap-3 w-full pb-20 pt-4 md:px-2 px-10 min-w-96 bg-blue-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {form.map((data, index) => {
                    const updatedAt = new Date(data.updated_at);
                    const formattedDate = format(updatedAt, 'dd-MM-yyyy');
                    const formattedTime = format(updatedAt, 'HH:mm');
                    
                    const timeDistanceToNow = formatDistanceToNow(updatedAt, { addSuffix: true });
                    const responseCount = formResponses[data.id] || 0;

                    return (
                        <div key={index} className='relative bg-gray-100 min-w-52 p-2 rounded-md h-fit shadow-md '>
                            { deleteForm === index && (
                                <DeletePage destroy={() => handleDeleteform(index)} i={index} data={data.id}/>
                            )}
                            <div className=''>
                                <div className='rounded-lg text-2xl font-extrabold text-center'>
                                    {data.title}
                                </div>
                                <div className='text-[12px] text-gray-500'>
                                    {data.desc}
                                </div>
                                <div className='text-sm'>
                                    <p>updated: {formattedDate} at {formattedTime}</p>
                                    <p>Answers: {responseCount}</p>
                                </div>
                                <div className='flex justify-between items-center'>
                                    <div className={` ${open === index ? 'bg-gray-300/50' : ''} relative p-2 hover:bg-gray-300/50 flex justify-center 
                                        items-center cursor-pointer rounded-full w-fit`} onClick={() => handleOpen(index)}>
                                        <BsThreeDotsVertical className='text-end text-lg ' />
                                        {open === index && (
                                            <span className='absolute bg-slate-200 top-1/2 left-1/2 rounded-lg shadow-inner z-50'>
                                            <Link className='flex items-center gap-2 px-4 rounded-t-lg hover:bg-slate-400' 
                                            href={'/form/e/' + data.uuid} onClick={() => handleLinkClick(index)} ><MdEdit /> edit</Link>
                                            <p className='flex items-center gap-2 px-4 rounded-b-lg hover:bg-slate-400' onClick={() => handleDeleteform(index)} > 
                                            <FaTrashAlt /> delete</p>
                                            
                                            </span>
                                        )}
                                    </div>
                                    <p className='text-end text-sm text-red-600'>{timeDistanceToNow}</p>
                                </div>
                            </div>
                            {loading === index && (
                                <span className='absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                                    <img src={loader} alt="Loading..." /> 
                                </span>
                            )}
                            
                        </div>
                    );
                })}
                
            </div>
            <div class="flex">
                <a href="#" class="flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                    </svg>
                    Previous
                </a>
                <a href="#" class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    Next
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </>
    );
};

export default FormDesc;
