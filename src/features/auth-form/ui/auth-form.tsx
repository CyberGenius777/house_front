'use client'

import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Typography } from '@/shared/ui/typography'

const loginSchema = z.object({
  login: z.string().min(1, 'Логин обязателен'),
  password: z.string().min(1, 'Пароль обязателен'),
  // .refine((value) => value.length >= 6, { message: 'минимум 6 символов' }),
})

type LoginFormData = z.infer<typeof loginSchema>

interface AuthFormProps {
  isLoading: boolean
  error?: string
  onSubmit: (data: LoginFormData) => void
}

export const AuthForm: FC<AuthFormProps> = ({ isLoading, error, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: zodResolver(loginSchema),
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
      <div>
        <label className='block font-medium'>Логин</label>
        <Input type='text' {...register('login')} className='w-full' />
        {errors.login && (
          <Typography variant='danger' size='small'>
            {errors.login.message}
          </Typography>
        )}
      </div>

      <div>
        <label className='block font-medium'>Пароль</label>
        <Input
          type='password'
          {...register('password')}
          className='border border-gray-300 rounded w-full'
        />
        {errors.password && (
          <Typography variant='danger' size='small'>
            {errors.password.message}
          </Typography>
        )}
      </div>

      {error && (
        <Typography className='ml-1' variant='danger' size='small'>
          {error}
        </Typography>
      )}

      <Button type='submit' isLoading={isSubmitting || isLoading} className=' px-4 py-2 w-full'>
        Войти
      </Button>
    </form>
  )
}
