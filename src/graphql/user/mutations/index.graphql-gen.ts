import * as Types from '../../../generated/types.graphql-gen';

import { GraphQLClient } from 'graphql-request';
import { useMutation, UseMutationOptions } from 'react-query';
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

export type SignUpUserMutationVariables = Types.Exact<{
    fullName: Types.Scalars['String'];
    email: Types.Scalars['String'];
    password: Types.Scalars['String'];
    role: Types.Scalars['String'];
}>;

export type SignUpUserMutation = {
    readonly __typename?: 'Mutation';
    readonly createdUser: {
        readonly __typename?: 'CreatedUserResponse';
        readonly token: string;
        readonly user: {
            readonly __typename?: 'User';
            readonly _id: string;
            readonly email: string;
            readonly fullName: string;
            readonly role: string;
        };
    };
};

export const SignUpUserDocument = `
    mutation signUpUser($fullName: String!, $email: String!, $password: String!, $role: String!) {
  createdUser(
    data: {fullName: $fullName, email: $email, password: $password, role: $role}
  ) {
    user {
      _id
      email
      fullName
      role
    }
    token
  }
}
    `;
export const useSignUpUserMutation = <TError = unknown, TContext = unknown>(
    client: GraphQLClient,
    options?: UseMutationOptions<SignUpUserMutation, TError, SignUpUserMutationVariables, TContext>,
    headers?: RequestInit['headers']
) =>
    useMutation<SignUpUserMutation, TError, SignUpUserMutationVariables, TContext>(
        ['signUpUser'],
        (variables?: SignUpUserMutationVariables) => fetcher<SignUpUserMutation, SignUpUserMutationVariables>(client, SignUpUserDocument, variables, headers)(),
        options
    );
