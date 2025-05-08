import { createEntityAdapter } from '@reduxjs/toolkit'
import { User } from '@/shared/api/auth'

export const userAdapter = createEntityAdapter<User, User['id']>({
  selectId: (user) => user.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
})
