import { User } from '@/entities/user'
import { LoginResponseDto } from './dtos'

export const mapLoginDtoToUserEntity = (dto: LoginResponseDto): User => ({
  id: dto.id,
  email: dto.email,
  name: dto.name,
  role: dto.role,
})
