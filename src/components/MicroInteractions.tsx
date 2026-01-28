'use client';

import { useEffect, useRef } from 'react';

// Hook for button ripple effect
export function useRipple() {
    const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

    useEffect(() => {
        const button = buttonRef.current;
        if (!button) return;

        const handleClick = (e: Event) => {
            const mouseEvent = e as MouseEvent;
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = mouseEvent.clientX - rect.left - size / 2;
            const y = mouseEvent.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.classList.add('ripple');

            button.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        };

        button.addEventListener('click', handleClick);
        return () => button.removeEventListener('click', handleClick);
    }, []);

    return buttonRef;
}

// Icon bounce animation component
export function BounceOnHover({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    return (
        <span className={`inline-block transition-transform duration-300 hover:scale-110 hover:-translate-y-1 ${className}`}>
            {children}
        </span>
    );
}
