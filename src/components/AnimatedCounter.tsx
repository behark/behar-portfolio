'use client';

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }: AnimatedCounterProps) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    const startTimeRef = useRef<number | null>(null);
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        if (inView && !startTimeRef.current) {
            startTimeRef.current = Date.now();

            const animate = () => {
                const now = Date.now();
                const elapsed = now - startTimeRef.current!;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentCount = easeOutQuart * end;

                setCount(currentCount);

                if (progress < 1) {
                    animationRef.current = requestAnimationFrame(animate);
                }
            };

            animationRef.current = requestAnimationFrame(animate);
        }

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [inView, end, duration]);

    const displayValue = end % 1 === 0 ? count.toFixed(0) : count.toFixed(1);
    
    return (
        <span ref={ref} className="counter">
            {prefix}{displayValue}{suffix}
        </span>
    );
}
