import React, { useState }  from 'react';
import { BarChart } from '../utils/chart-effect';

function Dashboard() {
    return (

        <div className='flex flex-col h-full'>
            <div className='bg-gray-200 rounded-xl w-200 h-100 shadow mt-50 ml-70 p-4'>
                <BarChart />
            </div>
        </div>
    )
}

export default Dashboard;