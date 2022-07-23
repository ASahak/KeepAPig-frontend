import * as Types from '../../../generated/types.graphql-gen';

import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
    return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type CreatedUserResponse = {
    readonly __typename?: 'CreatedUserResponse';
    readonly token: Scalars['String'];
    readonly user: User;
};

export type Mutation = {
    readonly __typename?: 'Mutation';
    readonly createdUser: CreatedUserResponse;
    readonly login: User;
};

export type MutationCreatedUserArgs = {
    data: UserInput;
};

export type Query = {
    readonly __typename?: 'Query';
    readonly user: ReadonlyArray<User>;
};

export type User = {
    readonly __typename?: 'User';
    readonly _id: Scalars['ID'];
    readonly email: Scalars['String'];
    readonly fullName: Scalars['String'];
    readonly password: Scalars['String'];
    readonly role: Scalars['String'];
};

export type UserInput = {
    readonly email: Scalars['String'];
    readonly fullName: Scalars['String'];
    readonly password: Scalars['String'];
    readonly role: Scalars['String'];
};

export type GetUserQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetUserQuery = {
    readonly __typename?: 'Query';
    readonly user: ReadonlyArray<{ readonly __typename?: 'User'; readonly _id: string }>;
};

export const GetUserDocument = `
    query getUser {
  user {
    _id
  }
}
    `;
export const useGetUserQuery = <TData = GetUserQuery, TError = unknown>(
    client: GraphQLClient,
    variables?: GetUserQueryVariables,
    options?: UseQueryOptions<GetUserQuery, TError, TData>,
    headers?: RequestInit['headers']
) =>
    useQuery<GetUserQuery, TError, TData>(
        variables === undefined ? ['getUser'] : ['getUser', variables],
        fetcher<GetUserQuery, GetUserQueryVariables>(client, GetUserDocument, variables, headers),
        options
    );
