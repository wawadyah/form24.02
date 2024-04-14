import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import TestHeader from '@/Components/Question/TestHeader';


const Response = ({props, submit, setAnswers}) => {
    const questions = props.form.question;
    const form_id = props.form.id;
    // const typeQuest = questions.selectedType;
    console.log( 'ini dri response', questions.selectedType)

    const renderInput = (type, options, questionIndex) => {
        const question = questions[questionIndex]; // Ambil pertanyaan saat ini
        const typeQuest = question.selectedType; // Ambil tipe soal saat ini
        
        switch (type) {
            case 'text':
                return (
                    <input
                        type="text"
                        className='mt-6 block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                        onChange={(e) => handleTextChange(e, questionIndex, typeQuest)}
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
                                    onChange={(e) => handleCheckboxChange(e, questionIndex, option, typeQuest)}
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
                                    onChange={(e) => handleRadioChange(e, questionIndex, typeQuest)}
                                />
                                <label className='ml-4'>{option}</label>
                            </div>
                        ))}
                    </div>
                );
            default:
                return null;
        }
    }
    

    const handleTextChange = (e, questionIndex, typeQuest) => {
        const { value } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: {
                type: typeQuest, 
            },
        }));
    };
    
    const handleCheckboxChange = (e, questionIndex, option, typeQuest) => {
        const { checked } = e.target;
        setAnswers((prevAnswers) => {
            const existingAnswers = prevAnswers[questionIndex]?.answer || [];
            if (checked) {
                return {
                    ...prevAnswers,
                    [questionIndex]: {
                        type: typeQuest,
                        answer: [...existingAnswers, option],
                    },
                };
            } else {
                return {
                    ...prevAnswers,
                    [questionIndex]: {
                        type: typeQuest,
                        answer: existingAnswers.filter(ans => ans !== option),
                    },
                };
            }
        });
    };
    
    const handleRadioChange = (e, questionIndex, typeQuest) => {
        const { value } = e.target;
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [questionIndex]: {
                type: typeQuest,
                answer: value, 
            },
        }));
    };
    

    

  return (
    <>
            <div>
                <div className='questionForm '>
                    <br />
                    <div className=''>
                        <div >
                            <div className='title'>
                                <div className='formTop mb-4 bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                                    <p className="questionTopName box-border text-[32px] font-semibold leading-[40px] w-full border-none outline-none text-black h-[35px] placeholder-gray-400">{props.form.title}</p>
                                    <p className='questionTopdesc box-border mt-5 text-[13px] leading-[40px] w-full border-none outline-none border-b border-[#F4F4F9] h-10'>{props.form.desc}</p>
                                </div>
                                {questions.map((question, questionIndex) => (
                                    <div className='mb-4' key={questionIndex}>
                                        <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                                            <div className='flex gap-2'>
                                                <div className="relative z-0 basis-2/3">
                                                <p className="questionTopName box-border text-[20px] font-medium leading-[40px] w-full text-gray-900">{questionIndex + 1}. {question.question} 
                                                    {question.required && <span className='text-red-900'>*</span>} </p>
                                                    {renderInput(question.selectedType, question.answers.map(answer => answer.option), questionIndex)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                    
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Response