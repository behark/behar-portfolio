'use client';

import { useEffect, useState } from 'react';
import { FiCheckCircle, FiXCircle, FiInfo, FiAlertCircle, FiX } from 'react-icons/fi';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface Toast {
    id: string;
    message: string;
    type: ToastType;
    duration?: number;
}

interface ToastProps {
    toast: Toast;
    onClose: (id: string) => void;
}

function ToastComponent({ toast, onClose }: ToastProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        // Trigger entrance animation
        setTimeout(() => setIsVisible(true), 10);

        // Auto-dismiss
        if (toast.duration !== 0) {
            const timer = setTimeout(() => {
                handleClose();
            }, toast.duration || 5000);

            return () => clearTimeout(timer);
        }
    }, [toast.duration]);

    const handleClose = () => {
        setIsExiting(true);
        setTimeout(() => {
            onClose(toast.id);
        }, 300);
    };

    const icons = {
        success: FiCheckCircle,
        error: FiXCircle,
        info: FiInfo,
        warning: FiAlertCircle,
    };

    const colors = {
        success: 'bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700 text-green-800 dark:text-green-200',
        error: 'bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-700 text-red-800 dark:text-red-200',
        info: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-200',
        warning: 'bg-yellow-50 dark:bg-yellow-900/30 border-yellow-200 dark:border-yellow-700 text-yellow-800 dark:text-yellow-200',
    };

    const iconColors = {
        success: 'text-green-600 dark:text-green-400',
        error: 'text-red-600 dark:text-red-400',
        info: 'text-blue-600 dark:text-blue-400',
        warning: 'text-yellow-600 dark:text-yellow-400',
    };

    const Icon = icons[toast.type];

    return (
        <div
            className={`
                ${colors[toast.type]}
                border rounded-lg shadow-lg p-4 mb-4 min-w-[300px] max-w-md
                flex items-start gap-3
                transform transition-all duration-300 ease-in-out
                ${isVisible && !isExiting ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}
            role="alert"
            aria-live="polite"
        >
            <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${iconColors[toast.type]}`} aria-hidden="true" />
            <p className="flex-1 text-sm font-medium">{toast.message}</p>
            <button
                onClick={handleClose}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                aria-label="Close notification"
            >
                <FiX className="w-4 h-4" />
            </button>
        </div>
    );
}

export function ToastContainer() {
    const [toasts, setToasts] = useState<Toast[]>([]);

    useEffect(() => {
        // Listen for toast events
        const handleToast = (event: CustomEvent<Omit<Toast, 'id'>>) => {
            const newToast: Toast = {
                id: Math.random().toString(36).substring(7),
                ...event.detail,
            };
            setToasts((prev) => [...prev, newToast]);
        };

        window.addEventListener('showToast' as any, handleToast as EventListener);

        return () => {
            window.removeEventListener('showToast' as any, handleToast as EventListener);
        };
    }, []);

    const handleClose = (id: string) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    };

    if (toasts.length === 0) return null;

    return (
        <div
            className="fixed top-4 right-4 z-50 md:top-6 md:right-6"
            aria-live="polite"
            aria-atomic="true"
        >
            {toasts.map((toast) => (
                <ToastComponent key={toast.id} toast={toast} onClose={handleClose} />
            ))}
        </div>
    );
}

// Helper function to show toast
export function showToast(message: string, type: ToastType = 'info', duration?: number) {
    const event = new CustomEvent('showToast', {
        detail: { message, type, duration },
    });
    window.dispatchEvent(event);
}
