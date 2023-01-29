import { createApi } from '@reduxjs/toolkit/query/react';
import { ClientError } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import GQLInstance, { API_URL } from '@/utils/GQLInstance';
import { Cookie } from '@/services';
import { GlobalConstants } from '@/common/constants';

export const client = GQLInstance();

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    prepareHeaders: (headers, context) => {
      if (GlobalConstants.WHITE_LIST.every((e: string) => API_URL.indexOf(e) === -1)) {
        headers.set('Authorization', `Bearer ${Cookie.getToken}`);
      }
      return headers;
    },
    client,
    customErrors: ({ name, stack, response }: ClientError) => ({
      name,
      message: response.errors?.[0]?.message || 'Something went wrong!',
      stack
    })
  }),
  endpoints: () => ({})
});
