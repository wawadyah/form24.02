import React from 'react'
import { IoIosClose } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";
import '../../../css/switch.css';
import Select from 'react-select';


const ResponseEdit = ({
    questionData,
    index,
    handleInputChange,
    handleOptionChange,
    handleTypeChange,
    handleAddAnswerClick,
    handleRemoveAnswer,
    handleAddClick,
    handleRemove,
    handleCopyQuestion,
    handleRequiredChange,
    DropdownLinks
}) => {
// console.log( 'ini question data',questionData)
    
return (
    <div className='question mb-4 '>
    <div className='group relative formTop bg-white  border-t-8 border-form rounded-lg pt-[20px] px-[25px] pb-[5px] hover:transition-all hover:duration-800 hover:ease-in-out hover:pb-[10px]'>
      <div className='flex gap-2'>
        <div className="relative z-0 basis-2/3">
          <input
            type="text"
            id={`question-${index}`}
            name="question"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={questionData.question}
            onChange={e => handleInputChange(e, index)}
          />
          <label
            htmlFor={`question-${index}`}
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Question
          </label>
        </div>

        <div className='basis-1/3'>
          <Select
            options={DropdownLinks}
            getOptionLabel={(option) => (
              <div className='flex'>
                <span className='mr-2 text-gray-500 text-[20px]'>{option.icon}</span>
                <span className='text-[15px]'>{option.label}</span>
              </div>
            )}
            onChange={(e) => handleTypeChange(e, index)}
            value={DropdownLinks.find(option => option.value === questionData.selectedType)}
            getOptionValue={(option) => option.value}
          />
        </div>
      </div>
      {questionData && questionData.answers && questionData.answers.map((answer, answerIndex) => (
         <div key={answerIndex}>
         {questionData.selectedType === 'text' && (
             <>
                 <div className=' mt-4 border-dotted border-b-2 border-form text-gray-300'>long paragraph</div>
                 <div className=' mt-4 border-dotted border-b-2 border-form text-gray-500'></div>
             </>
         )}
         {questionData.selectedType === 'checkbox' && (
             <div className=' flex mt-2 flex-row items-center'>
                 <div className='basis-1/12'>
                     <div className='border border-gray-500 h-[18px] w-[18px]'></div>
                 </div>
                 <input 
                     type="text" 
                     name={`option-${index}-${answerIndex}`} 
                     value={answer.option}
                     onChange={e => handleOptionChange(e, index, answerIndex)} 
                     className="basis-10/12 block w-full ml-2 py-1 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                     focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                 />

                 {questionData.answers.length > 0 && (
                     <button className=' hover:bg-text rounded-full p-1 absolute right-2' 
                     onClick={() => handleRemoveAnswer(index, answerIndex)}>
                         <IoIosClose className='text-[26px] text-gray-600' />
                     </button>
                 )}  
             </div>
         )}
         {questionData.selectedType === 'multiple_choice' && (
             <>
                 <div className=' flex mt-2 flex-row items-center relative'>
                     <div className='basis-1/12'>
                         <div className='border border-gray-500 h-[18px] w-[18px] rounded-full'></div>
                     </div>
                     <input 
                         type="text" 
                         name={`option-${index}-${answerIndex}`} 
                         value={answer.option}
                         onChange={e => handleOptionChange(e, index, answerIndex)} 
                         className=" basis-10/12 w-full ml-2 py-1 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                         focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                     />   
                     {questionData.answers.length > 0 && (
                         <button className=' hover:bg-text rounded-full p-1 absolute right-2' 
                         onClick={() => handleRemoveAnswer(index, answerIndex)}>
                             <IoIosClose className='text-[26px] text-gray-600' />
                         </button>
                     )}                                              
                 </div>
             
             </>
         )}
         <div className=' addButton absolute -right-[80px] top-1/2 -translate-y-1/2  h-full w-20 grid content-center justify-end '>
             <button
                 className=' bg-white shadow-md rounded-full hover:bg-gray-300  '
                 onClick={() => handleAddClick(index)} 
                 data-index={index}
             >
                 <CiCirclePlus className='text-[35px] m-2' />
             </button>
         </div>

     </div>
    ))}

      {questionData.selectedType !== '' && questionData.selectedType !== 'text' && (
        <button className='mt-4 px-2 border-b-2 border-black hover:bg-gray-100 active:bg-gray-400'
          onClick={() => handleAddAnswerClick(index)}>add</button>
      )}

      <div className='group-hover:block hidden hover:transition-all hover:duration-800 hover:ease-in-out border-t mt-6'>
        <div className='mt-2 grid grid-cols-2'>
          <label className='custom-checkbox switch relative inline-block w-[50px] h-[20px] z-10 self-center' htmlFor="">

            <input
              onClick={() => handleRequiredChange(index)}
              type="checkbox" className='tombol z-20 absolute cursor-pointer w-full opacity-0' />
            <span className='slider absolute top-0 left-0 right-0 bottom-0 bg-gray-200 rounded-2xl before:rounded-full before:bg-gray-400 transition-all duration-400 before:transition before:duration-400 after:absolute after:-top-5 after:text-xs after:font-semibold after:bg-gray-400/30 after:px-2 after:-left-1 after:rounded-md after:hidden after:transition after:duration-400 after:ease-in-out' />
          </label>

          {questionData.length !== 1 && (
            <div className='flex justify-center gap-4 justify-self-end'>
              <button className='hover:bg-gray-100/70 rounded-full'
                onClick={() => handleCopyQuestion(index)}>
                <MdContentCopy className='copy text-[25px] m-3 text-gray-500' />
              </button>
              <button className='hover:bg-gray-100/70 rounded-full'
                onClick={() => handleRemove(index)}>
                <FaRegTrashAlt className='text-[25px] m-3 text-gray-500' />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);
}

export default ResponseEdit