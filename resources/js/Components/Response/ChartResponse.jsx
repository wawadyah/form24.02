import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const ChartResponse = ({ props }) => {
    const data = props.soal;
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        // Menghitung jumlah jawaban dari data yang diberikan
        const counts = data.reduce((acc, answer) => {
            if (typeof answer === 'object') {
                // Jika jawaban adalah objek, iterasi setiap propertinya
                Object.keys(answer).forEach(key => {
                    acc[key] = acc[key] ? acc[key] + 1 : 1;
                });
            } else {
                // Jika jawaban adalah string, tambahkan ke jumlah umum
                acc[answer] = acc[answer] ? acc[answer] + 1 : 1;
            }
            return acc;
        }, {});

        // Membuat label dan data untuk grafik
        const labels = Object.keys(counts);
        const dataValues = Object.values(counts);

        // Menggambar grafik
        const chart = new Chart(ctx, {
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

        return () => {
            chart.destroy();
        };
    }, [data]);

    return (
        <div className='mb-4 bg-white border-t-8 border-form rounded-lg py-[20px] px-[25px]'>
            <canvas ref={chartRef} />
        </div>
    );
}

export default ChartResponse;
