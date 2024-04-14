import React from 'react'
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(

  ArcElement,
  Tooltip,
  Legend
);





const PieChart = ({ question, answers}) => {
  const options={}

  const dataChart = {
    labels: question.answers.map(answer => answer.option),
    datasets: [
        {
            label: "Answers",
            // data: [20, 20,41, 13],
            data: answers,
        backgroundColor: ["rgb(62, 152, 19)",
        "rgb(25, 192, 15)",
        "rgb(17, 121, 12)",
        ]
        },
    ],
  };

  return (
    <div className='grid grid-rows-13 h-[400px]'>

      <p className=' row-span-1'>{question.question}</p>
      <Pie options={ options } data={ dataChart } className=' row-span-12 justify-self-center p-6' />
    </div>
    
  )
}

export default PieChart