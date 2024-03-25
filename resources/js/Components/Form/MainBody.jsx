import { Link } from '@inertiajs/react'
import React from 'react'
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";

const MainBody = ({ uuid }) => {
    console.log('ini dari body', uuid);

    const handleNavigate = () => {
        // Navigasi ke halaman baru menggunakan UUID
        Link.visit(`/form/${uuid}`);
    };

  return(
   <div className="bg-gray-100 px-24">
        <div className="bg-red-100 py-2">
            <div className="my-6">
                Create New Form
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link onClick={handleNavigate} href={'/form/' + uuid}
                    className="border bg-white border-white active:bg-gray-100 hover:border-blue-800 flex justify-center items-center p-20 cursor-pointer rounded-md shadow-lg"
                >
                <BsFillFileEarmarkPlusFill />
                </Link>

                
            </div>
        </div>

        {/* <RecentForm /> */}
   </div>
)
}

export default MainBody