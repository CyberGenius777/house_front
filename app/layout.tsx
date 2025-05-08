import { cookies } from 'next/headers'
import './globals.css'
import { PropsWithChildren } from 'react'

import { mapLoginDtoToUserEntity } from '@/shared/api/auth/mappers'
import { LoginResponseDto, User } from '@/shared/api/auth'
import { AppWrapper } from './app-wrapper'
import { getMeSSR } from '@/shared/api/auth/getMeSSR'

export default async function RootLayout({ children }: PropsWithChildren) {
  const user = await getMeSSR()

  return (
    <html lang='ru'>
      <body>
        <AppWrapper user={user}>{children}</AppWrapper>
      </body>
    </html>
  )
}
