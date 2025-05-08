'use client'

import { FC, useEffect } from 'react'

import { setUser } from '@/entities/user'
import { useGetMeQuery } from '@/shared/api/auth'
import { useAppDispatch } from '@/shared/lib/store'

export const withInitQuery = <P extends object>(Component: FC<P>): FC<P> => {
  const InitQueryHoc: FC<P> = (props) => {
    const dispatch = useAppDispatch()
    const { data: user } = useGetMeQuery()
    console.log('user', user)
    useEffect(() => {
      if (user) dispatch(setUser(user))
    }, [user, dispatch])

    return <Component {...props} />
  }

  InitQueryHoc.displayName = `withInitQuery`

  return InitQueryHoc
}
