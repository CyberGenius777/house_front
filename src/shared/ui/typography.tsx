import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const typographyVariants = cva('block', {
  variants: {
    variant: {
      default: '',
      danger: 'text-destructive',
    },
    size: {
      default: 'color-foreground',
      small: 'text-sm',
      large: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

function Typography({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<'span'> & VariantProps<typeof typographyVariants>) {
  return (
    <span className={cn(typographyVariants({ variant, size, className }))} {...props}>
      {children}
    </span>
  )
}

export { Typography, typographyVariants }
