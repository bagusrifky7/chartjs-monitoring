import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function BarChart() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
    // Destroy previous chart if re-rendering
    if (chartInstance.current) {
        chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
            label: "Monthly Sales",
            data: [120, 190, 80, 150, 200, 170],
            backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
            ],
            borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 3,
            borderRadius: 7, // rounded bars
            },
        ],
        },
        options: {
        responsive: true,
        plugins: {
            legend: { position: "top" },
            title: {
            display: true,
            text: "BAST Summary",
            font: { size: 18 },
            },
        },
        scales: {
            y: {
            beginAtZero: true,
            ticks: { stepSize: 50 },
            },
        },
        },    
    });

    // Cleanup on unmount
    return () => chartInstance.current.destroy();
    }, []);

    return (
    <div style={{ width: "100%", height: "400px" }}>
        <canvas ref={chartRef} />
    </div>
    );

}

export { BarChart };