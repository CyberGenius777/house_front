'use client'

import { AuthForm } from '@/features/auth-form/ui/AuthForm'
import { useAppDispatch } from '@/shared/lib/store/create-store'
import { setUser } from '@/entities/user'
import { useLoginMutation } from '@/shared/api/auth'
import { mapLoginDtoToUserEntity } from '@/shared/api/auth/mappers'

export default function HomePage() {
  const dispatch = useAppDispatch()
  const [login] = useLoginMutation()

  const handleLogin = async (data: { login: string; password: string }) => {
    console.log('data', data)
    try {
      const response = await login(data).unwrap()
      const user = mapLoginDtoToUserEntity(response)
      dispatch(setUser(user))
    } catch (e) {
      const message = (e as { data?: { error?: string } }).data?.error || 'Ошибка авторизации'
      alert(message)
    }
  }

  return (
    <main className='p-10 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Вход в личный кабинет</h1>
      <AuthForm onSubmit={handleLogin} />
    </main>
  )
}
