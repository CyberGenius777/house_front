'use client'

import { Provider } from 'react-redux'
import { ReactNode } from 'react'
import { EnhancedStore } from '@reduxjs/toolkit'

interface Props {
  children: ReactNode
  store: EnhancedStore
}

export const ReduxProvider = ({ children, store }: Props) => {
  return <Provider store={store}>{children}</Provider>
}
