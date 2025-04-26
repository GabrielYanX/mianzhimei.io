// components/TextComponent.tsx
import React from 'react';

interface TextComponentProps {
    text: string;  // 通过 props 传递文本内容
}

const TextComponent: React.FC<TextComponentProps> = ({ text }) => {
    // 将文本按行分开（可以根据需求自定义分隔）
    const parts = text.split('k');  // 示例：按空格分隔成单词，可以更复杂的分割逻辑

    return (
        <div className="text-black font-mono text-left">
            {parts.map((part, index) => (
                <div
                    key={index}
                    className="text-black"
                    style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        lineHeight: '1.5',  // 固定行间距比例
                        marginTop: index === 0 ? '20px' : '30px' // 每行的间距
                    }}
                >
                    {part}
                </div>
            ))}
        </div>
    );
};

export default TextComponent;