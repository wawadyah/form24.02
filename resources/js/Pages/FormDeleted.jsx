import Header from '@/Components/Form/Header'
import React from 'react'
import { format, formatDistanceToNow } from 'date-fns';
import { Link } from '@inertiajs/react';
import SideBar from '@/Components/Form/SideBar';
import { Head } from '@inertiajs/react'

const FormDeleted = (props) => {
    console.log(props)
    const [sidebar, setSidebar] = useState(false);
  return (
    <div className='bg-slate-100 min-h-screen'>
        <Head>
            <title>Form | Deleted</title>
        </Head>
        <Header sidebar={sidebar} setSidebar={setSidebar}/>
        <SideBar sidebar={sidebar} setSidebar={setSidebar} />
        <div className='fixed inset-x-0 inset-y-0 flex items-center justify-center py-32 px-40'>
            <div className='bg-white shadow-md rounded-xl p-8 w-full h-full'>
                <div className="relative shadow-sm sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-lg text-center text-gray-700  bg-gray-50">
                    <tr>
                    <th scope="col" className="px-6 py-3 text-start">
                        No.
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        deleted at
                    </th>
                    <th scope="col" className="px-6 py-3">
                        action
                    </th>
                </tr>
                    </thead>
                    <tbody>
                        {props.form.map((data, i) => {
                            const updatedAt = new Date(data.deleted_at);
                            const formattedDate = format(updatedAt, 'dd-MM-yyyy');
                            const timeDistanceToNow = formatDistanceToNow(updatedAt, { addSuffix: true });

                            return(
                            <tr key={i} className="bg-white border-b hover:bg-gray-50 text-center text-md">
                                <th scope="row" className="px-6 py-4 font-semibold text-gray-900 text-start whitespace-nowrap ">
                                    {i + 1}
                                </th>
                                <td className="px-6 py-4">
                                    { data.title }
                                </td>
                                <td className="px-6 py-4 text-green-600">
                                    { timeDistanceToNow }
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link href={'/forced/' + data.id} className="font-medium text-red-600 pr-2 hover:underline ">destroy</Link> |
                                    <Link href={ '/restore/' + data.id } className="font-medium text-blue-600 hover:underline pl-2">restore</Link>
                                </td>
                            </tr>
                            )
                        })}
                    
                    </tbody>
                </table>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default FormDeleted