import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_TAG_TYPES } from './config'

export const EmptySplitApi = createApi({
  reducerPath: 'api',
  tagTypes: [API_TAG_TYPES.user.profile, API_TAG_TYPES.user.auth],
  baseQuery: fetchBaseQuery({
    baseUrl: '',
    credentials: 'include', // важен для куки
  }),

  endpoints: () => ({}),
})
