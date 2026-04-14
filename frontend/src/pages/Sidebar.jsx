import React, { act, useState } from 'react';
import dropdownArrow from '../assets/dropdown-arrow.svg';
import { SidebarEffect, SidebarEffectDashboard } from '../utils/sidebar-effect';
import homeIcon from '../assets/home-icon.svg';
import chart1 from '../assets/chart-1.svg';
import chart2 from '../assets/chart-2.svg';

function Sidebar({ active, setActive, activeChart, setActiveChart }) {


    return (
        <aside className="fixed left-0 top-0 h-full w-64 bg-slate-800 shadow-lg px-3 py-6 hidden md:flex flex-col">
            <div className="px-2 mb-5">
                <h1 className="text-white font-semibold text-lg">Metrocom Dashboard</h1>
                <p className="text-cyan-400 text-xs mt-0.5">Metrocom Dashboard PMO</p>
            </div>

            <div className="h-px bg-white/10 mx-1 mb-4"></div>

            <nav className="flex flex-col gap-0.5 flex-1">
                <SidebarEffectDashboard
                    id="dashboardpmo" label="Dashboard PMO" icon={chart1}
                    active={active} setActive={setActive} activeChart={activeChart} setActiveChart={setActiveChart} 
                    hrefLink="#hero"
                    subItems={[
                        { label: 'BAST Issue Tracking', chartKey: 'bastissuetracking', href: "#bastissuetracking" },
                        { label: 'BAST All Year', chartKey: 'bastallyear', href: '#bastallyear' },
                        { label: 'BAST Summary 2026-2031', chartKey: 'bastsummary20262031', href: '#bastsummary20262031' },
                        { label: 'BAST Summary', chartKey: 'bastsummary', href: '#bastsummary' }
                    ]}
                />
                <SidebarEffectDashboard
                    id="dashboardmo" label="Dashboard MO" icon={chart2}
                    active={active} setActive={setActive} activeChart={activeChart} setActiveChart={setActiveChart} hrefLink="#flavors"
                    subItems={[
                        { label: 'BAST Issue Tracking MO', chartKey: 'bastissuetrackingmo', href: "#bastissuetrackingmo" }
                    ]}
                />
                <SidebarEffect
                    id="user" label="User" icon={chart2}
                    active={active} setActive={setActive} hrefLink="#builder"
                />
            </nav>

            <div className="h-px bg-white/10 mx-1 mb-4"></div>

            <a href="#logout"
                className="flex items-center gap-2 px-2 py-2 rounded-lg text-red-400/70 hover:bg-red-500/10 hover:text-red-400 transition-colors duration-150 cursor-pointer text-sm">
                <span className="w-5 text-center text-base">⎋</span>
                Logout
            </a>
        </aside>
    )
}

export default Sidebar;