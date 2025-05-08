'use client'

import { FC, PropsWithChildren, useRef } from 'react'
import { createStoreWithUser } from '@/shared/lib/store/create-store'
import { withInitQuery } from '@/app/providers/with-init-query'
import { withStore } from '@/app/providers/with-store'
import compose from 'compose-function'
import { User } from '@/shared/api/auth'

const BaseLayout: FC<PropsWithChildren> = ({ children }) => <>{children}</>

interface Props extends PropsWithChildren {
  user: User | null
}

export const AppWrapper: FC<Props> = ({ user, children }) => {
  const storeRef = useRef(createStoreWithUser(user))

  const Composed = compose(withStore(storeRef.current), withInitQuery)(BaseLayout)

  return <Composed>{children}</Composed>
}
