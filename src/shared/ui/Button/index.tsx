"use client";

import { ButtonHTMLAttributes } from "react";
import { Spinner } from "../Spinner";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({
  children,
  className = "",
  isLoading = false,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={`
        inline-flex items-center justify-center gap-2
        cursor-pointer px-6 py-2 rounded-lg font-semibold transition text-white
        bg-orange-500 hover:bg-orange-600 
        dark:bg-orange-500 dark:hover:bg-orange-600 
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}`}
    >
      {isLoading && <Spinner />}
      {children}
    </button>
  );
};
