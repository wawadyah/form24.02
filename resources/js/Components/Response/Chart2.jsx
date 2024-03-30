import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const Chart2 = ({ props }) => {
    const chartRefs = useRef([]);
    const data = [props.answers];
    const questionses = props.form.question;

    {questionses.forEach((question, index) => (
        <p key={index}>{question}</p>
    ))}

    useEffect(() => {
        props.form.question.forEach((question, index) => {
            const canvasRef = chartRefs.current[index];
            const questions = props.form.question[index].answers;
            const type = props.form.question[index].selectedType;
            // console.log(index+1, data);
            console.log(type)
    
            if(type === 'checkbox' || type === 'multiple_choice'){
                questions.map((option) => (
                    // console.log(type),
                    console.log('option', option.option)
                ));
            }

            if (!canvasRef || !data) return;

            const ctx = canvasRef.getContext('2d');

            const counts = questions.reduce((acc, answer) => {
                    Object.keys(answer).forEach(key => {
                        acc[key] = acc[key] ? acc[key] + 1 : 1;
                    });
                return acc;
            }, {});

            const labels = Object.keys(counts);
            const dataValues = Object.values(counts);

            let chart
            if (question.selectedType === 'checkbox') {
                chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Jumlah Jawaban',
                                data: dataValues,
                                backgroundColor: 'rgba(43, 63, 229, 0.8)',
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    },
                });
            }
           
        });
    }, [props.form.question]);

    return (
        <>
        {/* <div className='mb-4 bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
            <canvas ref={chartRef} style={{ display: 'none' }} />
        </div> */}

        {questionses.map((question, questionIndex) => (
            <div className='mb-4' key={questionIndex}>
                <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                    <div className='flex gap-2'>
                        <div className="relative z-0 basis-2/3">
                            {question.selectedType === 'checkbox' && <canvas ref={chartRefs} />}
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <div>
       
        </div>
        </>
    );
}

export default Chart2;
