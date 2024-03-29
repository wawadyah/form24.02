import React from 'react'
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { IoIosClose } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";


const QuestionForm = ( { uuid } ) => {

    const [inputList, setInputList] = useState([{ question: '', selectedType: '', answers: [{option: '' }] }]);
    const localUuid = uuid;
    const [title, setTitle]= useState('');
    const [desc, setDesc] = useState('');

    const DropdownLinks = [
        {
            id: 1,
            name: "Field Input",
            link: "/#",
            type: 'text'
        },
        {
            id: 2,
            name: "Checkbox",
            link: "/#",
            type: 'checkbox'
        },
        {
            id: 3,
            name: "Multiple Choice",
            link: "/#",
            type: 'multiple_choice'
        },
    ];
    
    const handleInputChange = (e, index, answerIndex) => {
        const { name, value, type, checked } = e.target;
        const list = [...inputList];
        
        if (type === 'checkbox') {
            list[index].answers[answerIndex].answer = checked;
        } else if (type === 'radio') {
            list[index].answers.forEach((answer, i) => {
                answer.answer = i === answerIndex;
            });
        } else {
            list[index][name] = value;
        }
        
        setInputList(list);
    };

    const handleTypeChange = (e, index) => {
        const { value } = e.target;
        const list = [...inputList];
        list[index].selectedType = value;
        setInputList(list);
    };

    const handleAddAnswerClick = (index) => {
        const list = [...inputList];
        list[index].answers.push({option: '' });
        setInputList(list);
    };

    const handleRemoveAnswer = (index, answerIndex) => {
        const list = [...inputList];
        list[index].answers.splice(answerIndex, 1);
        setInputList(list);
    };

    const handleOptionChange = (e, index, answerIndex) => {
        const { value } = e.target;
        const list = [...inputList];
        list[index].answers[answerIndex].option = value;
        setInputList(list);
    };

    const handleAddClick = (index) => {
    const list = [...inputList];
    const newQuestion = { question: '', selectedType: '', answers: [{ option: '' }] };
    list.splice(index + 1, 0, newQuestion);
    setInputList(list);
    };

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleCopyQuestion = (index) => {
        const list = [...inputList];
        const copiedQuestion = JSON.parse(JSON.stringify(list[index])); 
        list.splice(index + 1, 0, copiedQuestion);
        setInputList(list);
    };

    const handleSubmit = () => {
        const data = inputList.map(item => ({     
            question: item.question,
            type: item.selectedType,
            answers: item.answers.map(answer => ({option: answer.option }))
        }));
        console.log(data);
    };

    const saveData = (e) => {
        e.preventDefault();
        router.post('/save', { inputList, localUuid ,title, desc }); 
    }


  return (
    <div >
        <div className='questionForm bg-[#F4f4f9] h-full pb-[30px]'>
            <br></br>
        <div className='section m-auto w-1/2'>
        <div >
                    <div className='title'>
                        <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                            <input
                                type="text"
                                name='title'
                                value={title} onChange={e=>setTitle(e.target.value)} 
                                className="block w-full ml-2 py-1 px-0 text-[32px] text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder='Untitled Document'
                            />
                            <input
                                type="text"
                                name='desc'
                                value={desc} onChange={e=>setDesc(e.target.value)} 
                                className="mt-4 block w-full ml-2 py-1 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                placeholder='Form Description'
                            />
                        </div>
                    </div>
                
    
                {inputList.map((x, i) => (
                    <div className='mt-4' key={i}>
                        <div className='question'>
                            <div className='relative formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                                <div className='flex gap-2'>
                                    <div className="relative z-0 basis-2/3">
                                        <input
                                            type="text"
                                            id={`question-${i}`}
                                            name="question"
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                            placeholder=" "
                                            value={x.question}
                                            onChange={e => handleInputChange(e, i)}
                                        />
                                        <label
                                            htmlFor={`question-${i}`}
                                            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
                                            peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                                        >
                                            Question
                                        </label>
                                    </div>

                                    <div className=' basis-1/3'>
                                        <select
                                            name={`questionType-${i}`}
                                            value={x.selectedType}
                                            onChange={e => handleTypeChange(e, i)}
                                            className="relative z-[9999] group cursor-pointer"
                                        >
                                            <option value="">Select Type</option>
                                            {DropdownLinks.map((data) => (
                                                <option key={data.id} value={data.type}>
                                                    {data.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className='relative'>
                                    {x.answers.map((answer, answerIndex) => (
                                        <div key={answerIndex}>
                                            {x.selectedType === 'text' && (
                                                <>
                                                    <div className=' mt-4 border-dotted border-b-2 border-form text-gray-300'>long paragraph</div>
                                                    <div className=' mt-4 border-dotted border-b-2 border-form text-gray-500'></div>
                                                </>
                                            )}
                                            {x.selectedType === 'checkbox' && (
                                                <div className='flex mt-2 flex-row items-center'>
                                                    <div className='basis-1/12'>
                                                        <div className='border border-gray-500 h-[18px] w-[18px]'></div>
                                                    </div>
                                                <input 
                                                        type="text" 
                                                        name={`option-${i}-${answerIndex}`} 
                                                        value={answer.option}
                                                        onChange={e => handleOptionChange(e, i, answerIndex)} 
                                                        className="basis-10/12 block w-full ml-2 py-1 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                    />
                                                    <div className=''>
                                                        {x.answers.length > 0 && (
                                                            <button className=' hover:bg-text rounded-full' 
                                                            onClick={() => handleRemoveAnswer(i, answerIndex)}>
                                                                <IoIosClose className='text-[30px] text-gray-600' />
                                                            </button>
                                                        )}
                                                        
                                                    </div> 
                                                </div>
                                            )}
                                            {x.selectedType === 'multiple_choice' && (
                                                <>
                                                    <div className='flex mt-2 flex-row items-center'>
                                                        <div className='basis-1/12'>
                                                            <div className='border border-gray-500 h-[18px] w-[18px] rounded-full'></div>
                                                        </div>
                                                        <input 
                                                            type="text" 
                                                            name={`option-${i}-${answerIndex}`} 
                                                            value={answer.option}
                                                            onChange={e => handleOptionChange(e, i, answerIndex)} 
                                                            className="basis-10/12 block w-full ml-2 py-1 px-0 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none 
                                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                                        />
                                                        <div className=''>
                                                            {x.answers.length > 0 && (
                                                                <button className=' hover:bg-text rounded-full' 
                                                                onClick={() => handleRemoveAnswer(i, answerIndex)}>
                                                                    <IoIosClose className='text-[30px] text-gray-600' />
                                                                </button>
                                                            )}
                                                            
                                                        </div>                                                 
                                                    </div>
                                                
                                                </>
                                            )}
                                            <div className=' absolute -right-[80px] top-1/2 -translate-y-1/2'>
                                                <button
                                                    className=' addButton bg-white shadow-lg rounded-full hover:bg-gray-300  '
                                                    onClick={() => handleAddClick(i)} 
                                                    data-index={i}
                                                >
                                                    <CiCirclePlus className='text-[35px] m-2' />
                                                </button>
                                                <p className='addPage absolute -top-[23px] -right-[2px]  bg-gray-300/70 text-[12px] px-2 rounded-md whitespace-nowrap'>add page</p>
                                            </div>
                
                                        </div>
                                    ))}
                                    {x.selectedType !== '' && x.selectedType !== 'text'  && (
                                        <button className='bg-secondary mt-4 rounded-lg px-2 text-white' 
                                        onClick={() => handleAddAnswerClick(i)}>Add Option</button>
                                    )}
                                </div>
                               
                                  
                               
                                <div className='border-t mt-6'>
                                    <div className='mt-2 grid place-items-end '>
                                        

                                        {inputList.length !== 1 &&
                                        <div className='flex justify-center gap-4'>
                                            <button className='hover:bg-gray-100/70 rounded-full'
                                            onClick={() => handleCopyQuestion(i)}>
                                                <MdContentCopy className='copy text-[25px] m-3 text-gray-500' />
                                            </button>
                                            <button className='hover:bg-gray-100/70 rounded-full' 
                                                onClick={() => handleRemove(i)}>
                                                <FaRegTrashAlt className='text-[25px] m-3 text-gray-500' />
                                            </button>
                                        
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
            ))}
            <button type='submit' className='bg-green-400 hover:bg-blue-500' onClick={saveData}>Submit</button>
        </div>

    </div>
    </div>
    </div>
  )
}

export default QuestionForm