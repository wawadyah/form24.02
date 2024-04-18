import React from 'react'
import { IoCloseOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from '@inertiajs/react';
import { useState } from 'react';

const SideBar = ({ setSidebar, sidebar }) => {
    
  return (

        <div className={`fixed left-0 min-h-screen bg-slate-300 w-52 flex flex-row p-4 gap-2 z-50 sidebar ${sidebar ? 'active' : 'inactive'}`}>
        <div className='basis-4/5 pt-4'>
            <Link href={'/user'} className='py-2 w-full hover:bg-slate-400 mb-2 rounded-lg px-2 text-white text-xl flex gap-2 items-center font-bold'><FaUser />User</Link>
            <Link href={'/form/a/trashed'} className='py-2 w-full hover:bg-slate-400 mb-2 rounded-lg px-2 text-white text-xl flex gap-2 items-center font-bold'><FaRegTrashAlt/>Trash</Link>
            <Link href={'/logout'} className='py-2 w-full hover:bg-slate-400 mb-2 rounded-lg px-2 text-white text-xl flex gap-2 items-center font-bold'><RiLogoutBoxLine/>Log Out</Link>
        </div>
        <div className='basis-auto hover:bg-slate-400 cursor-pointer active:to-blue-200 rounded-full h-fit p-2' 
        onClick={()=>(setSidebar(!sidebar))} >
            <IoCloseOutline className='text-2xl ' />
        </div>
    </div>
    
  )
}

export default SideBar