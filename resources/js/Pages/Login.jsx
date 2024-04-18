import LoginSection from '@/Components/Auth/LoginSection'
import SignUpSection from '@/Components/Auth/SignUpSection'
import InputError from '@/Components/InputError'
import InputMessages from '@/Components/InputMessages'
import React from 'react'

const Login = ({success, errors, messages}) => {

    console.log('pesanerror:', errors)
    console.log('message', messages)

    const login = document.querySelector('.login');
    const signup = document.querySelector('.signup');
    const form = document.querySelector('#form');
    const switches = document.querySelectorAll('.switch');

    let current = 1;

    const tab2 = () => {
        form.style.marginLeft = '-100%'
        switches[current - 1 ].classList.add('active');
        // login.classList.add('background-color: green;')
    };

    const tab1 = () => {
        form.style.marginLeft = '0'
        switches[current - 1 ].classList.remove('active');
    };

    // window.location.reload();
  return (
    <div className=' absolute top-0 bottom-0 left-0 right-0 bg-blue-100'>

        {errors && (
            <ul>
                {Object.entries(errors).map(([key, value]) => (
                    <li key={key}>
                        <InputError error={value} />
                    </li>
                ))}
            </ul>
        )}

        {messages && (
            <ul>
                <li>
                    <InputMessages message={messages} />
                </li>
            </ul>
        )}
    
    {success && <div id="alert-1" className="flex items-center p-4 m-4 text-blue-800 rounded-lg bg-blue-50 " role="alert">
            <svg className="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span className="sr-only">Info</span>
            <div className="ms-3 text-sm font-medium">
                {success}
            </div>
                <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-blue-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-1" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>}

    
    
        <div className='outer overflow-hidden fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2'>
            <form  className='rounded-lg shadow-inner shadow-slate-100 bg-gray-50 h-[400px] w-[500px] p-10'> 
                <div className='switch relative border-b-2 border-gray-600 w-full grid grid-cols-2 
                place-items-center font-bold text-[20px] py-1 after:absolute after:h-[6px] after:w-[50%] after:bg-blue-600
                after:-bottom-[2px] after:left-0 after:rounded-t-md after:ease-in-out transition duration-300 '>
                    <div className='login cursor-pointer' onClick={tab1}>Login</div>
                    <div className='signup cursor-pointer' onClick={tab2}>SignUp</div>
                </div>
                
                <div id='form' className=' h-full grid grid-cols-1 pt-4'>
                    <LoginSection id='page' />
                    <SignUpSection id='page' />
                    
                </div>
            </form>
        </div>
  </div>
  )
}

export default Login