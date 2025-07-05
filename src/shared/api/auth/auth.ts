import { EmptySplitApi } from '../empty-split-api'
import { LoginRequestDto, LoginResponseDto } from './dtos'

import * as Entities from './entities'
import { mapLoginDtoToUserEntity } from './mappers'

export const ServiceAuthApi = EmptySplitApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Entities.User, LoginRequestDto>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response: LoginResponseDto): Entities.User => {
        return mapLoginDtoToUserEntity(response)
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data: user } = await queryFulfilled
          dispatch(ServiceAuthApi.util.updateQueryData('getMe', undefined, () => user))
        } catch {}
      },
    }),

    getMe: build.query<Entities.User, void>({
      query: () => ({
        url: '/auth/me',
        method: 'GET',
      }),
      transformResponse: (response: LoginResponseDto): Entities.User => {
        console.log('response', response)
        return mapLoginDtoToUserEntity(response)
      },
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
        credentials: 'include', // важно, если используешь cookie
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled
          dispatch(ServiceAuthApi.util.resetApiState())
        } catch (e) {
          console.error('Ошибка logout', e)
        }
      },
    }),
  }),
})

export const { useLoginMutation, useGetMeQuery, useLogoutMutation } = ServiceAuthApi

export const selectGetMeQueryResult = ServiceAuthApi.endpoints.getMe.select()
