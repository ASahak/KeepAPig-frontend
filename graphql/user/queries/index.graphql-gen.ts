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
  Upload: any;
};

export type AuthUserResponse = {
  readonly __typename?: 'AuthUserResponse';
  readonly token: Scalars['String'];
  readonly user: User;
};

export type ChangePasswordDto = {
  readonly _id: Scalars['ID'];
  readonly password: Scalars['String'];
  readonly token: Scalars['String'];
};

export type ChangePasswordResponse = {
  readonly __typename?: 'ChangePasswordResponse';
  readonly success: Scalars['Boolean'];
};

export type CreateGoogleUserDto = {
  readonly avatar: Scalars['String'];
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly id: Scalars['String'];
  readonly role: Scalars['String'];
};

export type CreateUserDto = {
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly password: Scalars['String'];
  readonly role: Scalars['String'];
};

export type FetchUserDto = {
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

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly changePassword: ChangePasswordResponse;
  readonly createdUser: AuthUserResponse;
  readonly googleCreatedUser: AuthUserResponse;
  readonly sendEmail: Scalars['Boolean'];
  readonly uploadedAvatar: UploadAvatarResponse;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordDto;
};

export type MutationCreatedUserArgs = {
  data: CreateUserDto;
};

export type MutationGoogleCreatedUserArgs = {
  data: CreateGoogleUserDto;
};

export type MutationSendEmailArgs = {
  data: SendEmailDto;
};

export type MutationUploadedAvatarArgs = {
  data: UploadAvatarDto;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly fetchedUser: FetchUserResponse;
  readonly loggedUser: AuthUserResponse;
};

export type QueryFetchedUserArgs = {
  data: FetchUserDto;
};

export type QueryLoggedUserArgs = {
  data: SignInUserDto;
};

export type SendEmailDto = {
  readonly clientOrigin: Scalars['String'];
  readonly email: Scalars['String'];
};

export type SignInUserDto = {
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
  readonly rememberMe: Scalars['Boolean'];
};

export type UploadAvatarDto = {
  readonly file: Scalars['Upload'];
};

export type UploadAvatarResponse = {
  readonly __typename?: 'UploadAvatarResponse';
  readonly avatarSrc: Scalars['String'];
  readonly success: Scalars['Boolean'];
};

export type User = {
  readonly __typename?: 'User';
  readonly _id: Scalars['ID'];
  readonly avatar: Scalars['String'];
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly google: GoogleModel;
  readonly password: Scalars['String'];
  readonly resetPasswordToken: Scalars['String'];
  readonly role: Scalars['String'];
};

export type SignInUserQueryVariables = Types.Exact<{
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
  rememberMe: Types.Scalars['Boolean'];
}>;

export type SignInUserQuery = {
  readonly __typename?: 'Query';
  readonly loggedUser: {
    readonly __typename?: 'AuthUserResponse';
    readonly token: string;
    readonly user: { readonly __typename?: 'User'; readonly _id: string; readonly email: string; readonly fullName: string; readonly role: string; readonly avatar: string };
  };
};

export type FetchUserQueryVariables = Types.Exact<{
  _id: Types.Scalars['String'];
}>;

export type FetchUserQuery = {
  readonly __typename?: 'Query';
  readonly fetchedUser: {
    readonly __typename?: 'FetchUserResponse';
    readonly user: {
      readonly __typename?: 'User';
      readonly _id: string;
      readonly email: string;
      readonly fullName: string;
      readonly role: string;
      readonly resetPasswordToken: string;
      readonly avatar: string;
    };
  };
};

export const SignInUserDocument = `
    query signInUser($email: String!, $password: String!, $rememberMe: Boolean!) {
  loggedUser(data: {email: $email, password: $password, rememberMe: $rememberMe}) {
    user {
      _id
      email
      fullName
      role
      avatar
    }
    token
  }
}
    `;
export const FetchUserDocument = `
    query fetchUser($_id: String!) {
  fetchedUser(data: {_id: $_id}) {
    user {
      _id
      email
      fullName
      role
      resetPasswordToken
      avatar
    }
  }
}
    `;

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    signInUser: build.query<SignInUserQuery, SignInUserQueryVariables>({
      query: (variables) => ({ document: SignInUserDocument, variables })
    }),
    fetchUser: build.query<FetchUserQuery, FetchUserQueryVariables>({
      query: (variables) => ({ document: FetchUserDocument, variables })
    })
  })
});

export { injectedRtkApi as api };
export const { useSignInUserQuery, useLazySignInUserQuery, useFetchUserQuery, useLazyFetchUserQuery } = injectedRtkApi;
