import React, { useState }  from 'react';
import { BastSummary20262031, BastAllYear } from '../utils/chart-effect';
import { BastIssueTracking } from '../components/IssueTracking';
import { BastSummary } from '../components/BastSummary';

function Dashboard({ activeChart, API_URL }) {

    return (

        <div className='flex flex-col bg-slate-100 w-full h-full'>
            {activeChart === "bastsummary20262031" && <BastSummary20262031 />}
            {activeChart === "bastissuetracking" && <BastIssueTracking />}
            {activeChart === "bastallyear" && <BastAllYear />}
            {activeChart === "bastsummary" && <BastSummary API_URL={API_URL}/>}
        </div>
    )
}

export default Dashboard;