import { selectGetMeQueryResult } from '@/shared/api/auth'
import { RootState, useAppSelector } from '@/shared/store'
import { createSelector } from '@reduxjs/toolkit'

export const selectIsAuthorized = (state: RootState): boolean => Boolean(state.user.user)

export const getUser = createSelector([selectGetMeQueryResult], (user) => user.data)

export const useGetUser = () => useAppSelector(getUser)
