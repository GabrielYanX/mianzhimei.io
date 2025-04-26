"use client";

import React from 'react';

interface BackgroundComponentProps {
    backgroundColor?: string;
    backgroundImage?: string;
}

const BackgroundComponent: React.FC<BackgroundComponentProps> = ({
                                                                     backgroundColor = '#ffffff',
                                                                     backgroundImage,
                                                                 }) => {
    return (
        <div
            className="absolute top-0 left-0 w-full h-full z-0"
            style={{
                backgroundColor,
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        />
    );
};

export default BackgroundComponent;