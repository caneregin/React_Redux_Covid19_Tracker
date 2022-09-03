import React from 'react'
import { useSelector } from "react-redux"
import "../App.css"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            //position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};


function Graphics() {
    const infected = useSelector((state) => state.tracker.infected)
    const recovered = useSelector((state) => state.tracker.recovered)
    const deaths = useSelector((state) => state.tracker.deaths)
    const active = useSelector((state) => state.tracker.active)

    const labels = ['Infected', 'Recovered', 'Deaths', 'Active'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Current',
                data: [infected, recovered, deaths, active],
                backgroundColor: ["#b1d7fe", "#ddf6e2", "#fd8288", "#f5f290"],
            }
        ],
    };

    return (
        <div className='graph'><Bar options={options} data={data} /></div>
    )
}

export default Graphics