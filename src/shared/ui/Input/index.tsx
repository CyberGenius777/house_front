"use client";

import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className = "", ...props }: InputProps) => {
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm text-gray-800 dark:text-gray-400">
          {label}
        </label>
      )}
      <input
        {...props}
        className={`rounded-lg px-4 py-2 border text-sm 
          placeholder-gray-400 dark:placeholder-gray-500 
          focus:outline-none focus:border focus:border-orange-500 ${className}`}
      />
    </div>
  );
};
