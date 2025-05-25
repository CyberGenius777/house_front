export type User = {
  id: string
  email: string
  name: string
  role: 'admin' | 'resident'
  createdAt: string
  updatedAt: string
  tokenIssuedAt: number
}
