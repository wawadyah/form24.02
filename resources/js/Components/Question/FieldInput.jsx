import React, { useState } from 'react';
import { router } from '@inertiajs/react'

const FieldInput = ( { uuid, setInputList, setLocalUuid, handleAddClick } ) => {
    // console.log(uuid);
    // const [inputList, setInputList] = useState([{ question: '', selectedType: '', answers: [{ answer: '', option: '' }] }]);
    // const [localUuid, setLocalUuid] = useState(uuid);

    // useEffect(() => {
    //     setLocalUuid(uuid);
    // }, [uuid]);


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
        list[index].answers.push({ answer: '', option: '' });
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

    // const handleAddClick = () => {
    //     setInputList([...inputList, { question: '', selectedType: '', answers: [{ answer: '' }] }]);
    // };

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleSubmit = () => {
        const data = inputList.map(item => ({     
            question: item.question,
            type: item.selectedType,
            answers: item.answers.map(answer => ({ answer: answer.answer, option: answer.option }))
        }));
        console.log(data);
    };

    const saveData = (e) => {
        e.preventDefault();
        router.post('/save', { inputList, localUuid }); 
    }

    return (
        <form onSubmit={saveData}>
            {inputList.map((x, i) => (
                <div className='mt-4' key={i}>
                    <div className='title'>
                        <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
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

                                <div className='basis-1/3'>
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
                            <div>
                                {x.answers.map((answer, answerIndex) => (
                                    <div key={answerIndex}>
                                        {x.selectedType === 'text' && (
                                            <>
                                                <div className=' mt-4 border-dotted border-b-2 border-form text-gray-300'>long paragraph</div>
                                                <div className=' mt-4 border-dotted border-b-2 border-form text-gray-500'></div>
                                            </>
                                        )}
                                        {x.selectedType === 'checkbox' && (
                                            <>
                                                <input 
                                                    name='answer' 
                                                    type="checkbox" 
                                                    checked={answer.answer}
                                                    onChange={e => handleInputChange(e, i, answerIndex)}
                                                />
                                                <input 
                                                    type="text" 
                                                    name={`option-${i}-${answerIndex}`} // Menambahkan name yang unik untuk setiap option
                                                    value={answer.option}
                                                    onChange={e => handleOptionChange(e, i, answerIndex)} // Mengubah input option
                                                />
                                            </>
                                        )}
                                        {x.selectedType === 'multiple_choice' && (
                                            <>
                                                <input 
                                                    name='answer' 
                                                    type="radio" 
                                                    checked={answer.answer}
                                                    onChange={e => handleInputChange(e, i, answerIndex)}
                                                />
                                                <input 
                                                    type="text" 
                                                    name={`option-${i}-${answerIndex}`} // Menambahkan name yang unik untuk setiap option
                                                    value={answer.option}
                                                    onChange={e => handleOptionChange(e, i, answerIndex)} // Mengubah input option
                                                />
                                            </>
                                        )}

                                        {(x.selectedType !== 'text') && (
                                            <div>
                                                {x.answers.length > 1 && (
                                                    <button className='bg-red-100 hover:bg-blue-300' onClick={() => handleRemoveAnswer(i, answerIndex)}>Remove</button>
                                                )}
                                                {x.answers.length < 5 && (
                                                    <button className='bg-blue-100 hover:bg-blue-300' onClick={() => handleAddAnswerClick(i)}>Add Answer</button>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                            {inputList.length - 1 === i &&
                                <button className='bg-blue-100 hover:bg-blue-300' onClick={handleAddClick}>Add</button>
                            }
                            {inputList.length !== 1 &&
                                <button className='bg-red-100 hover:bg-blue-300' onClick={() => handleRemove(i)}>Remove</button>
                            }
                        </div>
                    </div>
                </div>
            ))}
            <button className='bg-green-400 hover:bg-blue-500'  >Submit</button>

</form>
);
};

export default FieldInput;
