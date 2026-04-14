import React, { useState, useEffect, useRef, useMemo } from 'react';
import Chart from 'chart.js/auto';

function BastSummary20262031() {
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
            label: "BAST",
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
    <div className='bg-gray-200 rounded-xl w-200 h-100 shadow mt-50 ml-70 p-4'>
        <canvas ref={chartRef} />
    </div>
    );

}

function IssueRagPie() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect( () => {
        if (chartInstance.current) {
            chartInstance.current.destroy()
        }

        const ctx = chartRef.current.getContext("2d");

        chartInstance.current = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Red',
                    'Blue',
                    'Yellow'
                ],
                datasets: [{
                    label: 'Issue Level',
                    data: [300, 50, 100],
                    backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)']
                }],
                hoverOffset: 4
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: "top" },
                    title: {
                    display: true,
                    text: "Issue Level (RAG)",
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
        })

        return () => chartInstance.current.destroy();
    }, []);

    return (
    <div className="flex bg-white shadow-md rounded-2xl p-5 items-center justify-center w-160 h-85">
        <canvas ref={chartRef} />
    </div>    
    );
}

function BastAllYear() {
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
        labels: ["2022", "2023", "2024", "2025", "2026", "2027"],
        datasets: [
            {
            label: "BAST",
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
            text: "BAST All Year",
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
    <div className='bg-gray-200 rounded-xl w-200 h-100 shadow mt-50 ml-70 p-4'>
        <canvas ref={chartRef} />
    </div>
    );

}

// function ProjectList() {

//     const [dataProject, setDataProject] = useState([])

//     useEffect(() => {
//         const dataProjectMock = [
//             { name: "BAST Migration System", date: "12 Apr 2026" },
//             { name: "HR Dashboard Revamp", date: "10 Apr 2026" },
//             { name: "API Integration SAP", date: "08 Apr 2026" },
//             { name: "Frontend Optimization", date: "05 Apr 2026" },
//             { name: "Security Audit", date: "01 Apr 2026" },
//             { name: "Mobile App Release", date: "28 Mar 2026" },
//         ];

//         setDataProject(dataProjectMock);
//     }, []);



//     const titleBox = "Project List"

//     return (
//     <div className="bg-white rounded-2xl shadow-md p-4 w-80 h-80 flex flex-col">
      

//       <h2 className="text-lg font-semibold mb-3">
//         {titleBox}
//       </h2>

//       {/* Scrollable List */}
//       <div className="overflow-y-auto space-y-3 pr-2">
//         {dataProject.map((project, index) => (
//           <div
//             key={index}
//             className="p-3 rounded-xl border hover:bg-gray-50 transition"
//           >
//             <p className="font-medium text-gray-800">
//               {project.name}
//             </p>
//             <p className="text-sm text-gray-500">
//               {project.date}
//             </p>
//           </div>
//         ))}
//       </div>

//     </div>
//     )
// }



export { BastSummary20262031 , IssueRagPie, BastAllYear };