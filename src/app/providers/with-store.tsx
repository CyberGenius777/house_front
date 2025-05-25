'use client'

import { FC, PropsWithChildren } from 'react'

import { Provider } from 'react-redux'

import { EnhancedStore } from '@reduxjs/toolkit'

interface Props extends PropsWithChildren {
  store: EnhancedStore
}

export const WithStore: FC<Props> = ({ store, children }) => {
  return <Provider store={store}>{children}</Provider>
}
