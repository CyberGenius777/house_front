import './globals.css'
import { PropsWithChildren } from 'react'

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
