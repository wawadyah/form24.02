import React, { useState } from 'react';

const Field = () => {
    const [inputList, setInputList] = useState([{ question: '', type: '' }]); // Menambahkan properti type

    const DropdownLinks = [
        {
            id: 1,
            name: "Field Input",
            link: "/#",
            type: 'text' // Menambahkan properti type
        },
        {
            id: 2,
            name: "Checkbox ",
            link: "/#",
            type: 'checkbox' // Menambahkan properti type
        },
        {
            id: 3,
            name: "Multiple Choice",
            link: "/#",
            type: 'multiple_choice' // Menambahkan properti type
        },
    ];

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { question: '', type: '' }]);
    };

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    return (
        <div>
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
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
                                        name={`dropdown-${i}`}
                                        // value={x.type} 
                                        onChange={e => handleInputChange(e, i)}
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
                            {x.type === 'text' && (
                                <div>
                                    <div className=' mt-4 border-dotted border-b-2 border-form text-gray-300'>long paragraph</div>
                                    <div className=' mt-4 border-dotted border-b-2 border-form text-gray-500'></div>
                                </div>
                            )}
                            {x.type === 'checkbox' && (
                                <div>
                                    checkbox
                                </div>
                            )}
                            {x.type === 'multiple_choice' && (
                                <div>
                                    multiple_choice
                                </div>
                            )}
                            {inputList.length-1 === i &&
                                <button className='bg-blue-100 hover:bg-blue-300' onClick={handleAddClick}>add more</button>
                            }
                            {inputList.length !== 1 &&
                                <button className='bg-red-100 hover:bg-blue-300' onClick={() => handleRemove(i)}>remove</button>
                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Field;
