import React, { useState } from 'react';
import FieldInput from '../Question/FieldInput';

const QuestionForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        questions: [],
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleQuestionChange = (questions) => {
        setFormData(prevState => ({
            ...prevState,
            questions: questions
        }));
    };

    const handleSubmit = () => {
        console.log(formData);
        // Lakukan sesuatu dengan formData, misalnya kirim ke server
    };

    return (
        <div>
            <div className='questionForm bg-[#F4f4f9] h-full pb-[30px]'>
                <br />
                <div className='section m-auto w-1/2'>
                    <div className='title'>
                        <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleFormChange}
                                className="questionTopName box-border text-[32px] font-medium leading-[40px] w-full border-none outline-none text-black h-[35px] placeholder-gray-400"
                                placeholder='Untitled Document'
                            />
                            <input
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleFormChange}
                                className='questionTopdesc box-border mt-5 text-[13px] leading-[40px] w-full border-none outline-none border-b border-[#F4F4F9] h-10'
                                placeholder='Form Description'
                            />
                        </div>
                    </div>
                    <FieldInput onChange={handleQuestionChange} />
                </div>
            </div>
            <button className='bg-gray-400' onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default QuestionForm;
