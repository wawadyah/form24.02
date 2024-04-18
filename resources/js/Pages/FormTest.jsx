import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import TestHeader from '@/Components/Question/TestHeader';
import Response from '@/Components/Response/Response';
import Chart from '@/Components/Response/Chart2'
import format from 'date-fns/format';




const FormTest = (props) => {
    const questions = props.form.question;
    const [answers, setAnswers] = useState({});
    const [submitDate, setDate] = useState();
    const form_id = props.form.id;

    const [activeView, setActiveView] = useState('response');

    const switchView = (view) => {
        setActiveView(view);


        if (view === 'chart') {
            window.location.hash = '#response';
        } else {
            window.location.hash = '';
        }

    };

    const currentDate = format(new Date(), 'MM/dd/yyyy');

    const handleSubmit = (e) => {
        e.preventDefault();


        setDate(() => ({
            currentDate
        }));

        router.post('/store', {answers, form_id, submitDate});
        // console.log(answers, form_id, submitDate); 
    };

    return (
        <div className='h-full bg-[#F4f4f9] pb-[30px]  '>
             <TestHeader props={props} view={ switchView } activeView={ activeView }  />

                <div className='mt-4'>   
                    {activeView === 'response' && (
                        <Response props={props} setAnswers={setAnswers} submit={handleSubmit}  />
                    )}
                    {activeView === 'chart' && (
                        <Chart props={props} submit={handleSubmit} />
                    )}
                </div>
                <button className='bg-primary rounded-md px-6 py-2 text-[15px] text-white text-semibold' 
                    onClick={handleSubmit}>Submit
                </button>
                
           
        </div>
    );
};

export default FormTest;
