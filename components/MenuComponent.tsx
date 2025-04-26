"use client";

import React, { useEffect, useState } from 'react';

const sections = [
    { id: 1, title: 'Overview' },
    { id: 2, title: 'Time' },
    { id: 3, title: 'Content' },
    { id: 4, title: 'Content' },
    { id: 5, title: 'Information' },
];

const MenuComponent: React.FC = () => {
    const [currentSection, setCurrentSection] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const viewportCenter = window.innerHeight / 2;

            let closestSectionId = 1;
            let minDistance = Infinity;

            sections.forEach((section) => {
                const sectionElement = document.getElementById(`section-${section.id}`);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    const sectionCenter = (rect.top + rect.bottom) / 2;
                    const distance = Math.abs(viewportCenter - sectionCenter);

                    if (distance < minDistance) {
                        minDistance = distance;
                        closestSectionId = section.id;
                    }
                }
            });

            setCurrentSection(closestSectionId);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll); // 防止窗口大小变化时错乱

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const handleClick = (sectionId: number) => {
        const sectionElement = document.getElementById(`section-${sectionId}`);
        if (sectionElement) {
            sectionElement.scrollIntoView({ behavior: 'smooth' });
        }
        setCurrentSection(sectionId);
    };

    return (
        <div className="fixed top-100 left-335 z-50 flex flex-col space-y-6">
            {sections.map((section) => (
                <div
                    key={section.id}
                    onClick={() => handleClick(section.id)}
                    className="flex items-center space-x-4 cursor-pointer"
                >
                    <div
                        className={`
                            font-serif transition-all duration-210
                            ${currentSection === section.id ? 'text-6xl text-black' : 'text-2xl text-gray-400'}
                        `}
                    >
                        {`0-${section.id}`}
                    </div>
                    <div
                        className={`
                            font-serif transition-all duration-210
                            ${currentSection === section.id ? 'text-5xl text-black' : 'text-xl text-gray-400'}
                        `}
                    >
                        {section.title}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MenuComponent;