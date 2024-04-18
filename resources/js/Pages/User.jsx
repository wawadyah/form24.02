import Header from '@/Components/Form/Header'
import React from 'react'
import { format, formatDistanceToNow } from 'date-fns';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import { Head } from '@inertiajs/react'
import loader from '../../../public/images/Spinner@1x-1.0s-200px-200px.svg'
import UserList from '@/Components/Admin/Table/UserList';
import UserNews from '@/Components/Admin/Table/UserNews';


const User = (props) => {
    console.log(props)
    const [sidebar, setSidebar] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [activeView, setActiveView] = useState('user');

    const switchView = (view) => {
        setActiveView(view);
        window.location.hash = view === 'user' ? '' : '#new-user';
    };
    

    const handleLoading = () => {
        setIsLoading(true);
        Link.visit(`/form/${uuid}`, {
          onFinish: () => setIsLoading(false),
        });
    }
    return (
    <div className='bg-slate-100 min-h-screen'>
        <Head>
            <title>User</title>
        </Head>
        <Header />
        
        {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <img src={loader} alt="Loading..." className=' w-1/2 h-1/2 ' /> 
        </div>
      )}

       <div className='fixed inset-x-0 inset-y-0 flex items-center justify-center  md:20 py-28 px-10 md:px-30 lg:px-40'>
            <div className='bg-white shadow-md rounded-xl p-8 w-full h-full min-w-[400px]'>
                <div className={`place-content-center justify-items-center w-full bg-blue-100 grid grid-cols-2
                text-xl font-bold text-black py-2 mb-2 relative after:bg-blue-400 after:w-1/2 after:h-1 after:bottom-0 after:rounded-t-md
                 after:absolute  ${activeView !== 'user' ? 'after:right-0' : 'after:left-0'}`}  >
                    <button className='' onClick={() => switchView('user')} >
                        user
                    </button>
                    <button onClick={() => switchView('new-user')} >
                        new user
                    </button>
                </div>
                <div className='mt-4'>   
                    {activeView === 'user' && (
                        <UserList props={props} />
                    )}
                    {activeView === 'new-user' && (
                        <UserNews props={props} />
                    )}
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default User
