import React from 'react'
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Title, 
    Tooltip,
    Legend,
    BarElement,
)



const options={}

const BarChart = ({ question, answers }) => {
    console.log('bar',answers)
      const barChart ={
        labels: question.answers.map(answer => answer.option),
        datasets: [
            {label: 'soal 1',
            data : answers,
            backgroundColor: ["rgb(62, 152, 19)"],
            borderColor: ["rgb(25, 192, 15)"],
            borderWidth: 1,
        }
        ]
    }

  return (

    <div className='grid grid-rows-13 h-[400px]'>
        <p className=' row-span-1'>{question.question}</p>
        <Bar options={options} data ={barChart}  /> 
    </div>
  )
}

export default BarChart