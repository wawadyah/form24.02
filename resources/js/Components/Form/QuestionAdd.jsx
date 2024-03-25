import React, { useState } from 'react';

const QuestionAdd = () => {
    const [selectedType, setSelectedType] = useState('');
    const [inputList, setInputList] = useState([{ answer: '' }]);

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

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleAddClick = () => {
        setInputList([...inputList, { answer: '', type: selectedType }]);
    };

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };

    return (
        <div>
            <div className=''>
                <select
                    name="questionType"
                    value={selectedType}
                    onChange={handleTypeChange}
                    className="relative z-[9999] group cursor-pointer"
                >
                    <option value="">Select Type</option>
                    {DropdownLinks.map((data) => (
                        <option key={data.id} value={data.type}>
                            {data.name}
                        </option>
                    ))}
                </select>

                {inputList.map((x, i) => (
                    <div key={i}>
                        {selectedType === 'text' && (
                            <input 
                                name='answer' 
                                type="text" 
                                placeholder="Enter your question" 
                                value={x.answer}
                                onChange={e => handleInputChange(e, i)}
                            />
                        )}
                        {selectedType === 'checkbox' && (
                            <input 
                                name='answer' 
                                type="checkbox" 
                                checked={x.answer}
                                onChange={e => handleInputChange(e, i)}
                            />
                        )}
                        {selectedType === 'multiple_choice' && (
                            <input 
                                name='answer' 
                                type="radio" 
                                checked={x.answer}
                                onChange={e => handleInputChange(e, i)}
                            />
                        )}

                        {
                            inputList.length!==0 && (
                            <button className='bg-red-100 hover:bg-blue-300' onClick={()=> handleRemove(i) }>remove</button>
                        )}
                        
                    </div>
                ))}

                <button className='bg-blue-100 hover:bg-blue-300' onClick={handleAddClick}>Add</button>
            </div>
        </div>
    );
};

export default QuestionAdd;
