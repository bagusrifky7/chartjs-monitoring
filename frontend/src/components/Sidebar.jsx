import React, { useState } from 'react';
import dropdownArrow from '../assets/dropdown-arrow.svg';
import { SidebarEffect, SidebarEffectDashboard } from '../utils/sidebar-effect';
import homeIcon from '../assets/home-icon.svg';
import chart1 from '../assets/chart-1.svg';
import chart2 from '../assets/chart-2.svg';

function Sidebar() {
    const [active, setActive] = useState('home')

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
                    active={active} setActive={setActive} hrefLink="#hero"
                    subItems={[
                        { label: 'BAST Issue Tracking', href: "#bastissuetracking" },
                        { label: 'BAST All Year', href: '#bastallyear' },
                        { label: 'BAST Summary', href: '#bastsummary' }
                    ]}
                />
                <SidebarEffectDashboard
                    id="dashboardmo" label="Dashboard MO" icon={chart2}
                    active={active} setActive={setActive} hrefLink="#flavors"
                    subItems={[
                        { label: 'BAST Issue Tracking MO', href: "#bastissuetrackingmo" }
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


// function Sidebar() {
//     return (

//     <aside class="fixed left-0 top-0 h-full w-80 bg-gray-800 shadow-lg p-6 hidden md:block">
//         <div>
//             <h1 class="text-2xl text-white font-bold mb-2">Metrocom Dashboard</h1>
//             <p class="text-sm text-cyan-500 mb-6">Metrocom Dashboard PMO</p>
//         </div>

//         <nav class="space-y-6 text-white">
//             <a href="#hero" class="block text-white-700 hover:text-blue-500"><span class="mr-2">&#9678;</span>Home</a>
//             <a href="#flavors" class="block hover:text-blue-500"><span class="mr-2">&#10047;</span>Dashboard</a>
//             <a href="#builder" class="block hover:text-blue-500"><span class="mr-2">&#9733;</span>User</a>
//         </nav>

//         <div class="mt-160">
//             <div class="block h-px bg-gray-500 gap-200"></div>
//             <a href="#logout" class="flex flex-row text-white hover:text-blue-500 mt-5 gap-3">
//                 <img src="./src/assets/logout-penage.png" class="w-5 h-5 ml-1" ></img>
//                 <span>
//                     Logout
//                 </span>
//             </a>
//         </div>
//     </aside>

//     )
// }

// function Sidebar() {

//     const [active, setActive] = useState("")
//     return (

//     <aside className="fixed left-0 top-0 h-full w-80 bg-gray-800 shadow-lg p-3 hidden md:block">
//         <div className='w-80'>
//             <h1 className="text-2xl text-white font-bold mb-2">Metrocom Dashboard</h1>
//             <p className="text-sm text-cyan-500 mb-6">Metrocom Dashboard PMO</p>
//         </div>

//       <nav className="space-y-1 text-white text-base w-80">
//             <SidebarEffect
//             id="home"
//             label="Home"
//             active={active}
//             setActive={setActive}
//             uniCode="◈"
//             hrefLink="#hero"
//             />

//             <SidebarEffectDashboard
//             id="dashboard"
//             label="Dashboard"
//             active={active}
//             setActive={setActive}
//             uniCode="✿"
//             hrefLink="#flavors"
//             />

//             <SidebarEffect
//             id="user"
//             label="User"
//             active={active}
//             setActive={setActive}
//             uniCode="★"
//             hrefLink="#builder"
//             />
//         </nav>

//         <div className="mt-145">
//             <div className="block h-px bg-gray-500 gap-200"></div>
//             <a href="#logout" className="flex flex-row text-white hover:text-blue-500 mt-5 gap-3">
//                 <img src="./src/assets/logout-penage.png" className="w-5 h-5 ml-1" ></img>
//                 <span>
//                     Logout
//                 </span>
//             </a>
//         </div>
//     </aside>

//     )
// }


// export default Sidebar;