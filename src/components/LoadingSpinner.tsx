import { FiLoader } from 'react-icons/fi';

interface LoadingSpinnerProps {
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    text?: string;
}

export function LoadingSpinner({ size = 'md', className = '', text }: LoadingSpinnerProps) {
    const sizes = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
    };

    return (
        <div className={`flex items-center justify-center gap-2 ${className}`}>
            <FiLoader className={`${sizes[size]} animate-spin text-blue-600 dark:text-blue-400`} aria-hidden="true" />
            {text && <span className="text-sm text-gray-600 dark:text-gray-300">{text}</span>}
        </div>
    );
}

export function ButtonSpinner() {
    return (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );
}

export function ImageLoadingPlaceholder() {
    return (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
            <FiLoader className="w-8 h-8 text-gray-400 dark:text-gray-500 animate-spin" aria-hidden="true" />
        </div>
    );
}
