'use client'

import { FC, PropsWithChildren } from 'react'
import { ReduxProvider } from '@/shared/lib/store/provider'
import { EnhancedStore } from '@reduxjs/toolkit'

export const withStore = (store: EnhancedStore) => {
  return (Component: FC<PropsWithChildren>) => {
    const WithStore: FC<PropsWithChildren> = (props) => (
      <ReduxProvider store={store}>
        <Component {...props} />
      </ReduxProvider>
    )

    WithStore.displayName = `withStore(${Component.displayName || Component.name || 'Component'})`

    return WithStore
  }
}
