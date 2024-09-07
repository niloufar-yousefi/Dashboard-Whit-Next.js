"use client";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler, scales,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip, Filler);

import { useEffect, useRef } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Margin } from "@mui/icons-material";


function Chart() {
    const chartRef = useRef(null);
    const salesData = [
        { month: "Jan", sales: 100 },
        { month: "Feb", sales: 150 },
        { month: "Mar", sales: 200 },
        { month: "Apr", sales: 120 },
        { month: "May", sales: 180 },
        { month: "Jun", sales: 250 },
        { month: "Jul", sales: 220 },
        { month: "Aug", sales: 190 },
        { month: "Sep", sales: 210 },
        { month: "Oct", sales: 230 },
        { month: "Nov", sales: 240 },
        { month: "Dec", sales: 260 },
    ];
    const salesData2 = [
        { month: "January", sales: 90 },
        { month: "February", sales: 130 },
        { month: "March", sales: 170 },
        { month: "April", sales: 80 },
        { month: "May", sales: 160 },
        { month: "June", sales: 150 },
        { month: "July", sales: 180 },
        { month: "August", sales: 190 },
        { month: "September", sales: 195 },
        { month: "October", sales: 160 },
        { month: "November", sales: 210 },
        { month: "December", sales: 230 },
    ];
    useEffect(() => {
        const chartInstance = chartRef.current.chartInstance;
        if (chartInstance) {
            chartInstance.data.datasets[0].data = salesData.map((data) => data.sales);
            chartInstance.update();
        }
    }, []);

    const data = {
        labels: salesData.map((data) => data.month),
        datasets: [
            {
                label: "2023",
                data: Array(salesData.length).fill(0), // شروع با صفر
                borderColor: "#007bff",
                borderWidth: 1,
                pointBorderColor: "#007bff",
                tension: 0.5,
                fill: true,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, 'rgba(36, 36, 244, 0.1)');
                    gradient.addColorStop(0.5, 'rgba(94, 94, 207, 0.066)');
                    return gradient;
                },
                pointRadius: 0,

            },
            {
                label: "2024",
                data: salesData2.map((data) => data.sales),
                borderColor: "#000087",
                borderWidth: 1,
                tension: 0.5,
                fill: false,
                pointRadius: 0,


            },
        ],
    };

    const options = {
        animation: false, // انیمیشن دیفالت را غیرفعال کنید
        animation: {
            onProgress: (animation) => {
                const dataset2 = animation.chart.data.datasets[1];
                const totalLength2 = salesData2.length;
                const currentLength2 = Math.floor((animation.currentStep / (animation.numSteps / 2)) * totalLength2); // کاهش مراحل
                dataset2.data = salesData2.slice(0, currentLength2).map((data) => data.sales);
                const dataset = animation.chart.data.datasets[0];
                const totalLength = salesData.length;
                const currentLength = Math.floor((animation.currentStep / (animation.numSteps / 2)) * totalLength); // کاهش مراحل
                dataset.data = salesData.slice(0, currentLength).map((data) => data.sales);
                animation.chart.update();
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    usePointStyle: true, // استفاده از شکل نقطه‌ای برای لجند
                    font: {
                        family: 'roboto', // فونت لجند را به Arial تغییر می‌دهد
                        size: 14, // اندازه فونت لجند را به 14 می‌دهد
                    },
                    pointStyle: 'circle', // شکل دایره را برای لجند انتخاب می‌کند                   
                },
            },
            tooltip: {
                mode: 'index',
                intersect: false,

            },
        },
        responsive: true,
        maintainAspectRatio: false,

        scales: {
            y: {
                title: {
                    display: false,
                },
                min: 50,
                grid: {
                    color: 'rgba(0, 0, 0, 0.05)',
                    borderColor: 'rgba(0, 0, 0, 0.05)',
                    display: true,
                    drawOnChartArea: true, // این خط باعث می‌شود گرید‌ها از داخل باکس شروع شوند و بیرون نزنند.
                    drawTicks: false, // این خط باعث می‌شود گرید‌ها بیرون باکس نزنند.
                },
                ticks: {
                    display: false,
                },
            },
            x: {
                offset: false, // غیرفعال کردن offset
                title: {
                    display: false,
                },
                grid: {
                    color: 'rgba(0, 0, 0, 0.1)',
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    display: true,
                    drawOnChartArea: true, // این خط باعث می‌شود گرید‌ها از داخل باکس شروع شوند و برون زنند.
                    drawTicks: false, // این خط باعث می‌شود گرید‌ها بیرون باکس نزنند.
                },
                ticks: {
                    padding: 0, // حذف فاصله بین تیک‌ها و محور

                    display: true,
                    font: {
                        
                        family: 'Roboto, sans-serif', // این خط فونت ماه‌ها را به Roboto تغییر می‌دهد.
                        size:12
                    },
                    align: 'center'
                },
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            },

        },

    };

    return (
        <div>

            <div className="w-full flex flex-wrap h-[300px] md:h-[400px]  cursor-default " >
                <div className=""></div>
                <div className="w-full md:pb-10 flex justify-between items-center  *:h-full *:text-slate-400 font-sans font-bold">
                    <div className="text-xs md:text-xl w-[60%]">
                        Sales Overview
                    </div>
                    <div className="flex flew-wrap w-[40%] *:w-1/2">
                        <div className="flex text-xs md:text-xl justify-end"><p>$2,830,775</p><ArrowUpwardIcon className="ml-2" /></div>
                        <div className=" text-end text-xs text-green-500 "> +8.5%</div>

                    </div>
                </div>
                <Line className="w-full  " ref={chartRef} data={data} options={{...options, layout: {padding: {left: 0, right: 0, top: 0, bottom: 0}}}}></Line>
            </div>
        </div>
    );
}

export default Chart;