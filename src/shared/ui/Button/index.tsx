"use client";

import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`px-6 py-2 rounded-lg font-semibold transition text-white
        bg-orange-500 hover:bg-orange-600 
        dark:bg-orange-500 dark:hover:bg-orange-600 
        ${className}`}
    >
      {children}
    </button>
  );
};
