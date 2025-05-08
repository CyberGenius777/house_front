'use client'

import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  const base = 'rounded-xl px-4 py-2 font-medium transition-colors duration-200'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300',
  }

  return <button className={`${base} ${variants[variant]}`} {...props} />
}
