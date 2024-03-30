import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import TestHeader from '@/Components/Question/TestHeader';
import Response from '@/Components/Response/Response';
import ChartResponse from '@/Components/Response/ChartResponse';
import Chart from '@/Components/Response/Chart2';


const FormTest = (props) => {
    const questions = props.form.question;
    const [answers, setAnswers] = useState({});
    const form_id = props.form.id;
    // console.log('ini dari page',props.responses)

    const renderInput = (type, options, questionIndex) => {
        switch (type) {
            case 'text':
                return (
                    <input
                        type="text"
                        className='mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        onChange={(e) => handleTextChange(e, questionIndex)}
                    />
                );
            case 'checkbox':
                return (
                    <div className='mt-6'>
                        {options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="checkbox"
                                    value={option}
                                    className=''
                                    onChange={(e) => handleCheckboxChange(e, questionIndex, option)}
                                />
                                <label className='ml-4'>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            case 'multiple_choice':
                return (
                    <div className='mt-6'>
                        {options.map((option, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    name={`question_${questionIndex}`}
                                    value={option}
                                    onChange={(e) => handleRadioChange(e, questionIndex)}
                                />
                                <label className='ml-4'>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    };

    const handleTextChange = (e, questionIndex) => {
        const { value } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: value,
        }));
    };

    const handleCheckboxChange = (e, questionIndex, option) => {
        const { checked } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: {
                ...prevAnswers[questionIndex],
                [option]: checked,
            },
        }));
    };

    const handleRadioChange = (e, questionIndex) => {
        const { value } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/store', {answers, form_id})
        // console.log(answers, form_id);
    };

    return (
        <div className='h-full bg-[#F4f4f9] pb-[30px]'>
             <TestHeader props={props} />
            <div className='section m-auto w-1/2'>
           
            <Response props={props} />
            {/* <ChartResponse props={props} /> */}
            <Chart props={props} />
            </div>
           
        </div>
    );
};

export default FormTest;
