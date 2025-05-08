import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '@/entities/user'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { EmptySplitApi } from '@/shared/api/empty-split-api'
import { User } from '@/shared/api/auth'

export const createStoreWithUser = (user: User | null) => {
  return configureStore({
    reducer: {
      user: userReducer,
      [EmptySplitApi.reducerPath]: EmptySplitApi.reducer,
    },
    preloadedState: {
      user: {
        user,
      },
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(EmptySplitApi.middleware),
  })
}

export type RootState = ReturnType<ReturnType<typeof createStoreWithUser>['getState']>
export type AppDispatch = ReturnType<typeof createStoreWithUser>['dispatch']

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
