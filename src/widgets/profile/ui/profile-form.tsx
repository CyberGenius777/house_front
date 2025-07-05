'use client'

import { Switch } from '@/shared/ui/Switch-old'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'

export const ProfileForm = () => {
  return (
    <form className='space-y-6 max-w-2xl'>
      <div className='flex items-center gap-4'>
        <div className='w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center text-2xl'>
          👤
        </div>
        <div className='text-xl font-medium'>Иванов И.И.</div>
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <Input label='Имя' defaultValue='Иванов Иван Иванович' />
        <Input label='Email' defaultValue='ivanov@example.com' />
        <Input label='Телефон' defaultValue='+7 123 456-79-90' />
      </div>

      <div className='flex items-center gap-4'>
        <span>Уведомления по email</span>
        <Switch />
      </div>

      <div className='grid grid-cols-1 gap-4'>
        <Input label='Текущий пароль' type='password' />
        <Input label='Новый пароль' type='password' />
        <Input label='Подтверждение пароля' type='password' />
      </div>

      <Button type='submit' className='bg-orange-500 hover:bg-orange-600 w-full'>
        Сохранить
      </Button>
    </form>
  )
}
