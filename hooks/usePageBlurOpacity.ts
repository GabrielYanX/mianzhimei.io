import { useEffect, useRef, useState } from 'react';

export const usePageBlurOpacity = (pageCount: number) => {
    const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [blurAmounts, setBlurAmounts] = useState<number[]>(Array(pageCount).fill(0));
    const [opacityAmounts, setOpacityAmounts] = useState<number[]>(Array(pageCount).fill(1));

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const newBlurAmounts = [...blurAmounts];
            const newOpacityAmounts = [...opacityAmounts];

            for (let i = 0; i < pageCount; i++) {
                const element = sectionRefs.current[i];
                if (!element) continue;

                const rect = element.getBoundingClientRect();
                const scrollProgress = Math.min(Math.max(0, -rect.top / windowHeight), 1);

                newBlurAmounts[i] = scrollProgress * 8;         // 最大模糊8px
                newOpacityAmounts[i] = 1 - scrollProgress * 0.5; // 最低透明度0.2
            }

            setBlurAmounts(newBlurAmounts);
            setOpacityAmounts(newOpacityAmounts);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [blurAmounts, opacityAmounts, pageCount]);

    return { sectionRefs, blurAmounts, opacityAmounts };
};