import * as React from 'react'

import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { Label } from './label'

interface IInput {
  label?: string
}

const inputVariants = cva(
  'focus-visible:border-ring focus-visible:ring-ring/50 px-3 py-2 rounded-md aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 aria-invalid:border-danger',
  {
    variants: {
      variant: {
        default: 'border border-gray-300',
        file: 'text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Input({
  className,
  variant,
  label,
  type,
  ...props
}: React.ComponentProps<'input'> & VariantProps<typeof inputVariants> & IInput) {
  return (
    <div className='flex flex-col space-y-1'>
      {label && <Label className='text-sm '>{label}</Label>}
      <input
        type={type}
        data-slot='input'
        className={cn(inputVariants({ variant, className }))}
        {...props}
      />
    </div>
  )
}

export { Input, inputVariants }
