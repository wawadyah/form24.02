import React from 'react'

const FormTitle = ({title, handleTitleChange, desc, handleDescChange}) => {
  return (
    <div className='formTop mb-4 bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
        <input
            type="text"
            name='title'
            value={title} onChange={handleTitleChange} 
            className="block w-full ml-2 py-1 px-0 text-[32px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
            focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder='Untitled Document'
        />
        <input
            type="text"
            name='desc'
            value={desc} onChange={handleDescChange} 
            className="mt-4 block w-full ml-2 py-1 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder='Form Description'
        />
    
    </div>
  )
}

export default FormTitle
