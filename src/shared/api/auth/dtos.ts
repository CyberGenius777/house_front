export type LoginRequestDto = {
  login: string
  password: string
}

export type OwnerType = 'owner' | 'tenant'

export interface IResident {
  id: string
  addedDate: Date
  fullName: string
  phone?: string
  email?: string
  ownerType: OwnerType
  animals: string[]
  apartmentId?: string
  apartment: IApartment
  user?: IUser
  userId?: string
}

export interface IApartment {
  id: string
  apartmentNumber?: number
  entrance?: number
  floor?: number
  square?: number
  residents: IResident[]
  residentsAmount?: number[]
}

export interface IUser {
  id: string
  login: string
  fullName: string
  role: 'admin' | 'resident'
  apartment: IApartment
}
