'use client'

import { FC, PropsWithChildren, useEffect } from 'react'

import { setUser } from '@/entities/user'
import { useGetMeQuery } from '@/shared/api/auth'
import { useAppDispatch } from '@/shared/store'

export const WithInitQuery: FC<PropsWithChildren> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { data: user } = useGetMeQuery()

  useEffect(() => {
    if (user) {
      dispatch(setUser(user))
    }
  }, [user, dispatch])

  return <>{children}</>
}
