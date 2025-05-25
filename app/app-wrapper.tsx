'use client'

import { FC, PropsWithChildren } from 'react'

import { store } from '@/shared/store'

import { User } from '@/shared/api/auth'
import { WithProviders } from '@/app/providers'

interface Props extends PropsWithChildren {
  user: User | null
}

export const AppWrapper: FC<Props> = ({ user, children }) => {
  return <WithProviders store={store(user)}>{children}</WithProviders>
}
