import React, { useState } from 'react';
import FormDesc from '../Components/Admin/FormDesc';
import Header from '@/Components/Form/Header';
import FormInfo from '@/Components/Admin/FormInfo';
import { FaPlus } from 'react-icons/fa';
import { Link, usePage } from '@inertiajs/react';
import loader from '../../../public/images/Spinner@1x-1.0s-200px-200px.svg'
import SideBar from '../Components/Form/SideBar';


const DashAdmin = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const uuid = props.uuid;
  const [sidebar, setSidebar] = useState(false);
  
  console.log(props)

  const handleNavigate = () => {
    setIsLoading(true);
    Link.visit(`/form/${uuid}`, {
      onFinish: () => setIsLoading(false),
    });
  };

  

  return (
    <div className='bg-slate-100 min-h-screen'>
        <SideBar sidebar={sidebar} setSidebar={setSidebar} />
      <Header sidebar={sidebar} setSidebar={setSidebar} />
      <div className='md:px-32 md:mt-20 px-10 py-4 mt-5'>
        <FormInfo props={props} />
        <FormDesc form={props.form} formResponses={props.formResponses} loading={isLoading} />
      </div>

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white opacity-75 z-50">
          <img src={loader} alt="Loading..." /> 
        </div>
      )}
      <Link onClick={handleNavigate} href={'/form/' + uuid}
        className=" bottom-16 left-12 fixed bg-white p-6 active:bg-gray-100 flex justify-center 
            items-center cursor-pointer rounded-full shadow-md shadow-gray-500/50 z-20 
            bg-clip-border bg-transparent bg-gradient-to-t from-blue-400 to-blue-100 group 
            active:from-blue-200 active:to-blue-200"
      >
        <FaPlus className='text-xl' />
        <span className='text-nowrap text-sm absolute -top-8 group-hover:block hidden text-white font-semibold 
         transition ease-in duration-1000 bg-slate-400/50 px-1 rounded-md
        '>add new form</span>
      </Link>
    </div>
  );
}

export default DashAdmin;
