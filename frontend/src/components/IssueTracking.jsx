import React, { useState } from 'react';
import { IssueRagPie } from '../utils/chart-effect';
import { ProjectList } from '../components/ProjectList';
import { TotalBastAmount } from '../components/BastAmount';

function BastIssueTracking() {
    return(
    <div className='flex flex-col w-300 h-220 mt-10 ml-87 p-4'>
        <div className='flex flex-row ml-1 gap-5 shadow-md'>
            {<TotalBastAmount />}
            {<IssueRagPie />}
        </div>

        <div className='flex mt-5'>
            {<ProjectList />}
        </div>
    </div>

    )
}

export { BastIssueTracking };