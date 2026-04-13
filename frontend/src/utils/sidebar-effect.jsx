import React, { useState } from 'react';
import dropdownArrow from '../assets/gemini-svg.svg';

function SidebarEffect({ id, active, setActive, hrefLink, icon , label }) {
    const [hovered, setHovered] = useState(false)
    const isActive = active === id

    return (
        <a
            onClick={() => setActive(id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            href={hrefLink}
            className={`flex flex-row items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors duration-150 text-white/70
                ${isActive ? 'bg-white/15 text-white' : 'hover:bg-white/8 hover:text-white'}`}
        >
            <span className={`block w-px h-6 rounded-full flex-shrink-0 transition-colors duration-200 ${isActive || hovered ? 'bg-white' : 'bg-transparent'}`}></span>
            <img src={icon} className="text-base w-5 h-8 text-center"></img>
            <span className="text-sm">{label}</span>
        </a>
    )
}

function SidebarEffectDashboard({ id, active, setActive, hrefLink, icon, label, subItems = [] }) {
    const [hovered, setHovered] = useState(false)
    const [dropDown, setDropdown] = useState(false)
    const isActive = active === id

    return (
        <div>
            <a
                onClick={() => { setActive(id); setDropdown(prev => !prev) }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                href={hrefLink}
                className={`flex flex-row items-center gap-2 px-2 py-2 rounded-lg transition-colors duration-150 text-white/70
                    ${isActive || hovered ? 'bg-white/15 text-white' : 'hover:bg-white/8 hover:text-white'}`}
            >
                <span className={`block w-px h-6 rounded-full flex-shrink-0 transition-colors duration-200 ${isActive || hovered ? 'bg-white' : 'bg-transparent'}`}></span>
                <img src={icon} className="text-base w-5 h-8 text-center"></img>
                <span className="text-sm flex-1">{label}</span>
                <img
                    src={dropdownArrow}
                    className="w-4 h-4 opacity-50 transition-transform duration-300"
                    style={{ transform: dropDown ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
            </a>

            {/* Dropdown */}
            <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: dropDown ? `${subItems.length * 40}px` : '0px', opacity: dropDown ? 1 : 0 }}
            >
                {subItems.map((item, i) => (
                    <a key={i} href={item.href}
                        className="flex items-center gap-2 pl-10 pr-2 py-2 rounded-lg text-sm text-white/50 hover:bg-white/5 hover:text-white/85 cursor-pointer transition-colors duration-150">
                        <span className="w-1 h-1 rounded-full bg-white/40 flex-shrink-0"></span>
                        {item.label}
                    </a>
                ))}
            </div>
        </div>
    )
}

export { SidebarEffect, SidebarEffectDashboard };