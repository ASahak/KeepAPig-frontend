import { createApi } from '@reduxjs/toolkit/query/react';
import { ClientError } from 'graphql-request';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import GQLInstance from '@/utils/GQLInstance';

export const client = GQLInstance();

export const api = createApi({
  baseQuery: graphqlRequestBaseQuery({
    client,
    customErrors: ({ name, stack, response}: ClientError) => ({
      name,
      message: response.errors?.[0]?.message || 'Something went wrong!',
      stack,
    })
  }),
  endpoints: () => ({}),
});
