import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';



const Plot = ({ X, Y }) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        responsive: true,
        delay: 2,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
                yAxisID: 'percentage',
                stepSize: 5,
                min: 0,
                max: 100
            },
            yAxisID: 'percentage',


        },
    };

    const labels = X;
    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: Y,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                tension: 0.1,

            },

        ],
    };
    return (<Line options={options} data={data} />)
}

export default Plot;