import { User } from '@/entities/user'
import { IUser } from './dtos'

export const mapLoginDtoToUserEntity = (dto: IUser): User => {
  const { id, name } = dto

  return {
    id: dto.id,
    email: dto.email,
    name: dto.name,
    role: dto.role,
    createdAt: dto.createdAt,
    updatedAt: dto.updatedAt,
    tokenIssuedAt: dto.tokenIssuedAt,
  }
}
