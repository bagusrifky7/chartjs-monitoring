import React, { useState }  from 'react';
import { BastSummary20262031, BastAllYear } from '../utils/chart-effect';
import { BastIssueTracking } from '../components/IssueTracking';
import { BastSummary } from '../components/BastSummary';

function Dashboard({ activeChart }) {

    return (

        <div className='flex flex-col bg-slate-100 w-full h-full'>
            {activeChart === "bastsummary20262031" && <BastSummary20262031 />}
            {activeChart === "bastissuetracking" && <BastIssueTracking />}
            {activeChart === "bastallyear" && <BastAllYear />}
            {activeChart === "bastsummary" && <BastSummary />}
        </div>
    )
}

export default Dashboard;