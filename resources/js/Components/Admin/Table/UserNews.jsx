import { Link } from '@inertiajs/react';
import React from 'react'
import { useState } from 'react';
import { format, formatDistanceToNow } from 'date-fns';

const UserNews = ({props}) => {
    const [isLoading, setIsLoading] = useState(false);
    const handleLoading = () => {
        setIsLoading(true);
        Link.visit(`/form/${uuid}`, {
          onFinish: () => setIsLoading(false),
        });
    }
  return (
    <div className="relative shadow-sm rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 min-w-[350px]">
            <thead className="text-lg text-center text-gray-700  bg-gray-100">
            <tr>
            <th scope="col" className="px-2 py-3 text-start">
                No.
            </th>
            <th scope="col" className="px-2 py-3">
                Name
            </th>
            <th scope="col" className="px-2 py-3">
                deleted at
            </th>
            <th scope="col" className="px-2 py-3">
                action
            </th>
        </tr>
            </thead>
            <tbody>
                {props.new.map((data, i) => {
                const updatedAt = new Date(data.created_at);
                const formattedDate = format(updatedAt, 'dd-MM-yyyy');
                const timeDistanceToNow = formatDistanceToNow(updatedAt, { addSuffix: true });

                    return(
                    <tr key={i} className="bg-gray-50 border-b hover:bg-gray-100 text-center text-md">
                        <th scope="row" className="px-2 py-4 font-semibold text-gray-900 text-start whitespace-nowrap ">
                            {i + 1}
                        </th>
                        <td className="px-2 py-4">
                            { data.name }
                        </td>
                        <td className="px-2 py-4 text-green-600">
                            { timeDistanceToNow }
                        </td>
                        <td className="px-2 py-4 ">
                            <Link onClick={handleLoading} href={'/user/destroy/' + data.name} className="font-medium text-red-600 pr-2 hover:underline ">delete</Link>| 
                             <Link onClick={handleLoading} href={'/user/approve/' + data.name} className="font-medium text-blue-600 pr-2 hover:underline "> approve</Link>
                        </td>
                    </tr>
                    )
                })}
            
            </tbody>
        </table>
        </div> 
  )
}

export default UserNews
