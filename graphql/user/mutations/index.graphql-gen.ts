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

export type SignUpUserMutationVariables = Types.Exact<{
  fullName: Types.Scalars['String'];
  email: Types.Scalars['String'];
  password: Types.Scalars['String'];
  role: Types.Scalars['String'];
}>;

export type SignUpUserMutation = {
  readonly __typename?: 'Mutation';
  readonly createdUser: {
    readonly __typename?: 'AuthUserResponse';
    readonly token: string;
    readonly user: { readonly __typename?: 'User'; readonly _id: string; readonly email: string; readonly fullName: string; readonly role: string };
  };
};

export type SignUpGoogleUserMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  fullName: Types.Scalars['String'];
  email: Types.Scalars['String'];
  avatar: Types.Scalars['String'];
  role: Types.Scalars['String'];
}>;

export type SignUpGoogleUserMutation = {
  readonly __typename?: 'Mutation';
  readonly googleCreatedUser: {
    readonly __typename?: 'AuthUserResponse';
    readonly token: string;
    readonly user: {
      readonly __typename?: 'User';
      readonly _id: string;
      readonly email: string;
      readonly fullName: string;
      readonly role: string;
      readonly google: { readonly __typename?: 'GoogleModel'; readonly id: string; readonly avatar: string };
    };
  };
};

export type ChangePasswordMutationVariables = Types.Exact<{
  password: Types.Scalars['String'];
  _id: Types.Scalars['ID'];
  token: Types.Scalars['String'];
}>;

export type ChangePasswordMutation = { readonly __typename?: 'Mutation'; readonly changePassword: { readonly __typename?: 'ChangePasswordResponse'; readonly success: boolean } };

export type UploadAvatarMutationVariables = Types.Exact<{
  file: Types.Scalars['Upload'];
}>;

export type UploadAvatarMutation = {
  readonly __typename?: 'Mutation';
  readonly uploadedAvatar: { readonly __typename?: 'UploadAvatarResponse'; readonly success: boolean; readonly avatarSrc: string };
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
    mutation changePassword($password: String!, $_id: ID!, $token: String!) {
  changePassword(data: {password: $password, _id: $_id, token: $token}) {
    success
  }
}
    `;
export const UploadAvatarDocument = `
    mutation uploadAvatar($file: Upload!) {
  uploadedAvatar(data: {file: $file}) {
    success
    avatarSrc
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
    uploadAvatar: build.mutation<UploadAvatarMutation, UploadAvatarMutationVariables>({
      query: (variables) => ({ document: UploadAvatarDocument, variables })
    })
  })
});

export { injectedRtkApi as api };
export const { useSignUpUserMutation, useSignUpGoogleUserMutation, useChangePasswordMutation, useUploadAvatarMutation } = injectedRtkApi;
