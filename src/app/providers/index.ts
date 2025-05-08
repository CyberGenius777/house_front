import compose from 'compose-function'
import { withInitQuery } from './with-init-query'
import { withStore } from './with-store'
import { EnhancedStore } from '@reduxjs/toolkit'

export const createProviders = (store: EnhancedStore) => compose(withStore(store), withInitQuery)
