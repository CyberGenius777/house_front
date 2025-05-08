'use client'

import { useState } from 'react'
import { Button } from '@/shared/ui/Button'

type Props = {
  onSubmit: (data: { login: string; password: string }) => void
}

export const AuthForm = ({ onSubmit }: Props) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit({ login, password })
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <input
        type='text'
        placeholder='login'
        className='w-full px-3 py-2 border rounded'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type='password'
        placeholder='Пароль'
        className='w-full px-3 py-2 border rounded'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit'>Войти</Button>
    </form>
  )
}
