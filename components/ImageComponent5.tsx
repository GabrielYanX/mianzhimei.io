"use client";

import React from 'react';

interface ImageComponentProps {
    src: string;        // 图片路径
    alt?: string;       // 可选：图片描述
    width?: string;     // 可选：宽度（默认 300px）
    height?: string;    // 可选：高度（默认 auto）
    className?: string; // 可选：额外的样式类
}

const ImageComponent: React.FC<ImageComponentProps> = ({
                                                           src,
                                                           alt = '',
                                                           width = '150px',
                                                           height = '150px',
                                                           className = '',
                                                       }) => {
    return (
        <div className={`relative ${className}`} style={{ width, height }}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-contain shadow-xl bg-white"
                style={{ boxShadow: '0px 4px 6px rgba(0,0,0,0.5)' }}
            />
        </div>
    );
};

export default ImageComponent;