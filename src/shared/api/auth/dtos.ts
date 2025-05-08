export type LoginRequestDto = {
  login: string
  password: string
}

export type LoginResponseDto = {
  id: string
  email: string
  name: string
  role: 'admin' | 'resident'
  createdAt: string
  updatedAt: string
  tokenIssuedAt: number
}
