import { cookies } from 'next/headers'
import { LoginResponseDto, User } from '.'
import { mapLoginDtoToUserEntity } from './mappers'

export const getMeSSR = async (): Promise<User | null> => {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get('token')?.value

    if (!token) return null

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    })

    if (!res.ok) return null

    const dto: LoginResponseDto = await res.json()
    return mapLoginDtoToUserEntity(dto)
  } catch (e) {
    console.error('SSR getMe error:', e)
    return null
  }
}
