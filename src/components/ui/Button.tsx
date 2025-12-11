import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    className?: string;
}

export const MinimalButton: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyle = "px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform active:scale-95";
    const variants = {
        primary: "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-blue-500/30 hover:-translate-y-0.5",
        outline: "bg-transparent text-zinc-800 dark:text-white border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20",
        ghost: "text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
    };
    return (
        <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
            <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
    );
};
