import { RootState } from '@/shared/store'

export const selectIsAuthorized = (state: RootState): boolean => Boolean(state.user.user)
