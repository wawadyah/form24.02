import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartResponse = ({ props }) => {
    const chartRefs = useRef([]);

    useEffect(() => {
        props.form.question.forEach((question, index) => {
            const canvasRef = chartRefs.current[index];
            const data = props.form[index];

            if (!canvasRef || !data) return;

            const ctx = canvasRef.getContext('2d');

            const counts = data.reduce((acc, answer) => {
                if (typeof answer === 'object') {
                    Object.keys(answer).forEach(key => {
                        acc[key] = acc[key] ? acc[key] + 1 : 1;
                    });
                } else {
                    acc[answer] = acc[answer] ? acc[answer] + 1 : 1;
                }
                return acc;
            }, {});

            const labels = Object.keys(counts);
            const dataValues = Object.values(counts);

            let chart;
            if (question.selectedType === 'checkbox') {
                chart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Jumlah Jawaban' ,
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
            } else if (question.selectedType === 'multiple_choice') {
                chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Jumlah Jawaban',
                                data: dataValues,
                                backgroundColor: ['rgba(43, 63, 229, 0.8)', 'rgba(250, 192, 19, 0.8)', 'rgba(255, 99, 132, 0.8)'],
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

            return () => {
                if (chart) chart.destroy();
            };
        });
    }, [props.answers, props.form.question]);

    return (
        <>
            {/* {props.form.question.map((question, index) => (
                <div className='mb-4' key={index}>
                    <div className='formTop bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
                        <div className='flex gap-2'>
                            <div className="relative z-0 basis-2/3">
                                <canvas ref={el => chartRefs.current[index] = el} />
                                {question.selectedType === 'checkbox' && <div>hai</div>}
                            </div>
                        </div>
                    </div>
                </div>
            ))} */}
        </>
    );
}

export default ChartResponse;
