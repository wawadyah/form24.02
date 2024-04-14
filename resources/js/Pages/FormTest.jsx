import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import TestHeader from '@/Components/Question/TestHeader';
import Response from '@/Components/Response/Response';
import ChartResponse from '@/Components/Response/ChartResponse';
import Chart from '@/Components/Response/Chart2'
import QuestionForm from '@/Components/Form/QuestionForm';


const FormTest = (props) => {
    const questions = props.form.question;
    const [answers, setAnswers] = useState({});
    const form_id = props.form.id;



    const handleSubmit = (e) => {
        e.preventDefault();
        router.post('/store', {answers, form_id})
        // console.log(answers, form_id);
    };

    return (
        <div className='h-full bg-[#F4f4f9] pb-[30px]'>
             <TestHeader props={props} submit={handleSubmit} />
            <div className='section m-auto w-1/2'>
           
            <Response props={props} setAnswers={setAnswers} />
            {/* <ChartResponse props={props} /> */}
            <Chart props={props} />
            </div>
           
        </div>
    );
};

export default FormTest;
