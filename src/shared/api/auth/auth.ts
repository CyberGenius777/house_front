import { EmptySplitApi } from '../empty-split-api'
import { LoginRequestDto, LoginResponseDto } from './dtos'
import { User } from './entities'

import { mapLoginDtoToUserEntity } from './mappers'

export const ServiceAuthApi = EmptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<User, LoginRequestDto>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response: LoginResponseDto): User => {
        return mapLoginDtoToUserEntity(response)
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled
          dispatch(ServiceAuthApi.util.updateQueryData('getMe', undefined, () => user))
        } catch {}
      },
    }),

    getMe: build.query<User, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
      transformResponse: (response: LoginResponseDto): User => {
        console.log('response', response)
        return mapLoginDtoToUserEntity(response)
      },
    }),
  }),
})

export const { useLoginMutation, useGetMeQuery } = ServiceAuthApi
