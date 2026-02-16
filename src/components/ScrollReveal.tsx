'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
}

export function ScrollReveal({ 
    children, 
    delay = 0, 
    className = '',
    direction = 'up' 
}: ScrollRevealProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const directions = {
        up: 'translateY(30px)',
        down: 'translateY(-30px)',
        left: 'translateX(-30px)',
        right: 'translateX(30px)',
        fade: 'translateY(0)',
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0) translateX(0)' : directions[direction],
                transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

// Stagger container for multiple items
interface StaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({ children, staggerDelay = 0.1, className = '' }: StaggerContainerProps) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className={className}>
            {React.Children.map(children, (child, index) => {
                if (React.isValidElement(child)) {
                    const childElement = child as React.ReactElement<{ style?: React.CSSProperties }>;
                    return React.cloneElement(childElement, {
                        style: {
                            ...(childElement.props.style || {}),
                            opacity: inView ? 1 : 0,
                            transform: inView ? 'translateY(0)' : 'translateY(30px)',
                            transition: `opacity 0.6s ease ${index * staggerDelay}s, transform 0.6s ease ${index * staggerDelay}s`,
                        },
                    });
                }
                return child;
            })}
        </div>
    );
}

// Parallax effect component
interface ParallaxProps {
    children: React.ReactNode;
    speed?: number;
    className?: string;
}

export function Parallax({ children, speed = 0.5, className = '' }: ParallaxProps) {
    const [offset, setOffset] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const scrolled = window.pageYOffset;
                const parallax = scrolled * speed;
                setOffset(parallax);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transform: `translateY(${offset}px)`,
                transition: 'transform 0.1s ease-out',
            }}
        >
            {children}
        </div>
    );
}
