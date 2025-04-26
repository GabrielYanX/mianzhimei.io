// pages/index.tsx
"use client";

import React from 'react';
import TextComponent from '@/components/TextComponent';  // 引入 TextComponent
import TextComponent2 from "@/components/TextComponent2";
import ThreeDModel from '@/components/ThreeDModel'; // 导入3D模型组件
import ImageComponent from '@/components/ImageComponent';
import BackgroundComponent   from "@/components/BackgroundComponent";
import ImageComponent2 from "@/components/ImageComponent2";
import ImageComponent3 from "@/components/ImageComponent3";
import ImageComponent4 from "@/components/ImageComponent4";
import ImageComponent5 from "@/components/ImageComponent5";
import MenuComponent from "@/components/MenuComponent";
import {usePageBlurOpacity} from "@/hooks/usePageBlurOpacity";
import TableComponent from "@/components/TableComponent";
import ThreeDModel2 from "@/components/ThreeDModel2";
import ThreeDModel3 from "@/components/ThreeDModel3";
import ThreeDModel4 from "@/components/ThreeDModel4";
import ThreeDModel5 from "@/components/ThreeDModel5";

const sections = [1, 2, 3, 4, 5];

const Home = () => {
    const { sectionRefs, blurAmounts, opacityAmounts } = usePageBlurOpacity(sections.length);

    return (
        <div className="h-screen w-screen bg-white relative ">
            {/* 悬浮目录组件 */}
            <MenuComponent />
            {/* First Page */}
            {sections.map((id, index) => (
                <div
                    key={id}
                    id={`section-${id}`}
                    ref={(el) => { sectionRefs.current[index] = el }}
                    style={{
                        filter: `blur(${blurAmounts[index]}px)`,
                        opacity: opacityAmounts[index],
                        transition: 'all 0.3s ease'
                    }}
                    className="h-screen w-full flex items-center justify-center border-b border-gray-300 relative">
                    {id === 1 && (
                        <>
                            <BackgroundComponent backgroundImage="/images/bg1.png"/>

                            {/* Centered TextComponent */}
                            <div className="absolute top-25 left-80">
                                <TextComponent text="Welcome, Mianzhimei！！！"/>
                            </div>

                            <div className="absolute top-25 left-280">
                                <TextComponent2 text="sorry!"/>
                            </div>

                            <div className="absolute top-245 left-190">
                                <TextComponent2 text="Mianzhimei is the best！！！"/>
                            </div>

                            {/* Top-left TextComponent */}
                            <div className="absolute top-7 left-17 font-serif text-5xl">
                                <TextComponent2 text="0-1"/>
                            </div>

                            <div className="absolute top-20 right-100 w-[100px] h-[100px]">
                                <ImageComponent src="/images/cat1.jpg"/>
                            </div>

                            <div className="absolute top-210 right-380 w-[100px] h-[100px]">
                                <ImageComponent2 src="/images/cat2.jpg"/>
                            </div>

                            <div className="absolute top-90 right-330 w-[100px] h-[100px]">
                                <ImageComponent3 src="/images/mouse1.jpg"/>
                            </div>

                            <div className="absolute top-170 right-40 w-[100px] h-[100px]">
                                <ImageComponent4 src="/images/mouse2.jpg"/>
                            </div>

                            <div className="absolute top-180 right-160 w-[100px] h-[100px]">
                                <ImageComponent5 src="/images/mouse3.jpg"/>
                            </div>


                            {/* 右下角放置3D模型 */}
                            <div className="items-center justify-center w-[450px] h-[450px] z-10">
                                <ThreeDModel/>
                            </div>
                        </>
                    )}
                    {id === 2 && (
                        <>
                        {/* Second Page */}
                            <div className="h-screen w-screen bg-white flex items-center justify-start overflow-auto">
                                <TableComponent
                                    rows={[
                                        {title: '绵智美庄园 3605.3.3', detail: '今天又是辛勤工作的一天！'},
                                        {title: '绵羊湾 3705.3.3', detail: '今天又是辛勤工作的一天！'},
                                        {title: '绵智美宫殿 3815.3.3', detail: '今天又是辛勤工作的一天！'},
                                        {title: '绵智美岛 3935.3.3', detail: '今天又是辛勤工作的一天！'},
                                    ]}
                                />
                            </div>
                            <div className="absolute top-7 left-17 font-serif text-5xl">
                                <TextComponent2 text="0-2"/>
                            </div>

                            <div className="absolute top-1 left-280 w-[650px] h-[650px] z-10">
                                <ThreeDModel2/>
                            </div>

                        </>
                    )}
                    {id === 3 && (
                        <>
                            <TextComponent text="这里放绵智美长官的丰功伟绩！"/>
                            <div className="absolute top-7 left-17 font-serif text-5xl">
                                <TextComponent2 text="0-3"/>
                            </div>

                            <div className="absolute top-10 left-10 w-[450px] h-[450px] z-10">
                                <ThreeDModel3/>
                            </div>
                        </>
                    )}
                    {id === 4 && (
                        <>
                            <TextComponent text="这里也放绵智美长官的丰功伟绩！！！"/>
                            <div className="absolute top-7 left-17 font-serif text-5xl">
                                <TextComponent2 text="0-4"/>
                            </div>

                            <div className="absolute top-150 left-10 w-[350px] h-[350px] z-10">
                                <ThreeDModel4/>
                            </div>
                        </>
                    )}
                    {id === 5 && (
                        <>
                            <TextComponent2
                                text="Name：Mianzhimei！k
                                          Address:Mianyangwan k
                                          Tele.:666-6666-6666
                                "/>
                            <div className="absolute top-7 left-17 font-serif text-5xl">
                                <TextComponent2 text="0-5"/>
                            </div>

                            <div className="absolute top-90 left-20 w-[550px] h-[550px] z-10">
                                <ThreeDModel5/>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Home;
