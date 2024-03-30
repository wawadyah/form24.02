import LoginSection from '@/Components/Auth/LoginSection'
import SignUpSection from '@/Components/Auth/SignUpSection'
import React from 'react'

const Login = () => {

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

  return (
  <div className=' absolute top-0 bottom-0 left-0 right-0 bg-blue-100'>
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