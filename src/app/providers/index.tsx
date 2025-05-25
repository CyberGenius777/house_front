'use client'

import { FC, PropsWithChildren } from 'react'
import { EnhancedStore } from '@reduxjs/toolkit'

import { WithInitQuery } from './with-init-query'
import { WithStore } from './with-store'
import { WithAuthForm } from './with-auth-form'

interface Props extends PropsWithChildren {
  store: EnhancedStore
}

export const WithProviders: FC<Props> = ({ store, children }) => {
  return (
    <WithStore store={store}>
      <WithAuthForm>
        <WithInitQuery>{children}</WithInitQuery>
      </WithAuthForm>
    </WithStore>
  )
}
