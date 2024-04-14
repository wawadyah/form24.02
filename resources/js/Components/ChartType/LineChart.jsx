import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



const LineChart = () => {

    const lineChart = {
        labels: [
            "Monday",
            "Tuesday",
            "Wedhesday",
            "Thursday",
            "Friday"
        ],
        datasets: [
            {
                label: "steps",
                data: [1000, 4000, 4000, 8000, 3000],
                borderColor: "rgb(75, 192, 19)",
            },
            {
                label: "steps",
                data: [4000,500, 2000, 1000, 7000],
                borderColor: "rgb(75, 154, 15)",
            },
        ],
    };
    
    const options = {};

  return (

        <Line  options={options} data={lineChart} />

  )
}

export default LineChart