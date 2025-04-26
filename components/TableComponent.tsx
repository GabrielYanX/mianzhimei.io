import React, { useState } from 'react';

interface RowData {
    title: string;
    detail: string;
}

interface ExpandableRowTableProps {
    rows: RowData[];
}

const ExpandableRowTable: React.FC<ExpandableRowTableProps> = ({ rows }) => {
    const [expandedRows, setExpandedRows] = useState<boolean[]>(Array(rows.length).fill(false));

    const toggleRow = (index: number) => {
        const newExpandedRows = [...expandedRows];
        newExpandedRows[index] = !newExpandedRows[index];
        setExpandedRows(newExpandedRows);
    };

    return (
        <div className="ml-30 w-full flex flex-col">
            {rows.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    className="w-4/6 border-t-4 border-black cursor-pointer transition-all duration-300"
                    onClick={() => toggleRow(rowIndex)}
                >
                    <div
                        className={`flex flex-col justify-start px-4 ${
                            expandedRows[rowIndex] ? 'h-64' : 'h-32'
                        } transition-all duration-300`}
                    >
                        {/* 标题（点击后字体变橙色且加文字阴影） */}
                        <div
                            className={`text-left text-3xl font-custom pt-4 ${
                                expandedRows[rowIndex]
                                    ? 'text-orange-500 text-shadow-lg' // 橙色和文字阴影
                                    : 'text-black'
                            } transition-all duration-300`}
                            style={{
                                textShadow: expandedRows[rowIndex] ? '2px 2px 5px rgba(255, 165, 0, 0.7)' : 'none', // 设置文字阴影
                            }}
                        >
                            {row.title}
                        </div>

                        {/* 详细内容（点击后才显示） */}
                        {expandedRows[rowIndex] && (
                            <div className="text-left text-black text-xl mt-4">
                                {row.detail}
                            </div>
                        )}
                    </div>
                </div>
            ))}
            {/* 最底下补一条横线 */}
            <div className="w-4/6 border-t-4 border-black" />
        </div>
    );
};

export default ExpandableRowTable;