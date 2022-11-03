import * as Types from '../../../generated/types.graphql-gen';

import { api } from '@/api/baseApi';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthUserResponse = {
  readonly __typename?: 'AuthUserResponse';
  readonly token: Scalars['String'];
  readonly user: User;
};

export type ChangePasswordInputType = {
  readonly _id: Scalars['String'];
  readonly password: Scalars['String'];
  readonly token: Scalars['String'];
};

export type ChangePasswordResponse = {
  readonly __typename?: 'ChangePasswordResponse';
  readonly success: Scalars['Boolean'];
};

export type CreateUserInputType = {
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly password: Scalars['String'];
  readonly role: Scalars['String'];
};

export type FetchUserInputType = {
  readonly _id: Scalars['String'];
};

export type FetchUserResponse = {
  readonly __typename?: 'FetchUserResponse';
  readonly user: User;
};

export type GoogleModel = {
  readonly __typename?: 'GoogleModel';
  readonly avatar: Scalars['String'];
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly id: Scalars['String'];
};

export type GoogleUserInputType = {
  readonly avatar: Scalars['String'];
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly id: Scalars['String'];
  readonly role: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly changePassword: ChangePasswordResponse;
  readonly createdUser: AuthUserResponse;
  readonly googleCreatedUser: AuthUserResponse;
  readonly sendEmail: Scalars['Boolean'];
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInputType;
};


export type MutationCreatedUserArgs = {
  data: CreateUserInputType;
};


export type MutationGoogleCreatedUserArgs = {
  data: GoogleUserInputType;
};


export type MutationSendEmailArgs = {
  data: SendEmailInputType;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly fetchedUser: FetchUserResponse;
  readonly loggedUser: AuthUserResponse;
};


export type QueryFetchedUserArgs = {
  data: FetchUserInputType;
};


export type QueryLoggedUserArgs = {
  data: SignInUserInputType;
};

export type SendEmailInputType = {
  readonly clientOrigin: Scalars['String'];
  readonly email: Scalars['String'];
};

export type SignInUserInputType = {
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
  readonly rememberMe: Scalars['Boolean'];
};

export type User = {
  readonly __typename?: 'User';
  readonly _id: Scalars['ID'];
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly google: GoogleModel;
  readonly password: Scalars['String'];
  readonly resetPasswordToken: Scalars['String'];
  readonly role: Scalars['String'];
};

export type SignUpUserMutationVariables = Types.Exact<{
  fullName: Types.Scalars['String'];
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
  role: Types.Scalars['String'];
}>;


export type SignUpUserMutation = { readonly __typename?: 'Mutation', readonly createdUser: { readonly __typename?: 'AuthUserResponse', readonly token: string, readonly user: { readonly __typename?: 'User', readonly _id: string, readonly email: string, readonly fullName: string, readonly role: string } } };

export type SignUpGoogleUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  fullName: Types.Scalars['String'];
  email: Types.Scalars['String'];
  avatar: Types.Scalars['String'];
  role: Types.Scalars['String'];
}>;


export type SignUpGoogleUserMutation = { readonly __typename?: 'Mutation', readonly googleCreatedUser: { readonly __typename?: 'AuthUserResponse', readonly token: string, readonly user: { readonly __typename?: 'User', readonly _id: string, readonly email: string, readonly fullName: string, readonly role: string, readonly google: { readonly __typename?: 'GoogleModel', readonly id: string, readonly avatar: string } } } };

export type ChangePasswordMutationVariables = Types.Exact<{
  password: Types.Scalars['String'];
  _id: Types.Scalars['String'];
  token: Types.Scalars['String'];
}>;


export type ChangePasswordMutation = { readonly __typename?: 'Mutation', readonly changePassword: { readonly __typename?: 'ChangePasswordResponse', readonly success: boolean } };


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
export const SignUpGoogleUserDocument = `
    mutation signUpGoogleUser($id: String!, $fullName: String!, $email: String!, $avatar: String!, $role: String!) {
  googleCreatedUser(
    data: {id: $id, fullName: $fullName, email: $email, avatar: $avatar, role: $role}
  ) {
    user {
      _id
      email
      fullName
      google {
        id
        avatar
      }
      role
    }
    token
  }
}
    `;
export const ChangePasswordDocument = `
    mutation changePassword($password: String!, $_id: String!, $token: String!) {
  changePassword(data: {password: $password, _id: $_id, token: $token}) {
    success
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    signUpUser: build.mutation<SignUpUserMutation, SignUpUserMutationVariables>({
      query: (variables) => ({ document: SignUpUserDocument, variables })
    }),
    signUpGoogleUser: build.mutation<SignUpGoogleUserMutation, SignUpGoogleUserMutationVariables>({
      query: (variables) => ({ document: SignUpGoogleUserDocument, variables })
    }),
    changePassword: build.mutation<ChangePasswordMutation, ChangePasswordMutationVariables>({
      query: (variables) => ({ document: ChangePasswordDocument, variables })
    }),
  }),
});

export { injectedRtkApi as api };
export const { useSignUpUserMutation, useSignUpGoogleUserMutation, useChangePasswordMutation } = injectedRtkApi;

