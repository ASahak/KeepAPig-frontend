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
  readonly notVerified?: Maybe<Scalars['Boolean']>;
  readonly token?: Maybe<Scalars['String']>;
  readonly user?: Maybe<User>;
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

export type DeleteAvatarResponse = {
  readonly __typename?: 'DeleteAvatarResponse';
  readonly success: Scalars['Boolean'];
};

export type FetchUserDto = {
  readonly _id: Scalars['String'];
};

export type FetchUserResponse = {
  readonly __typename?: 'FetchUserResponse';
  readonly user: User;
};

export type Get2faSecretDto = {
  readonly _id: Scalars['ID'];
};

export type Get2faSecretResponse = {
  readonly __typename?: 'Get2faSecretResponse';
  readonly otpAuthUrl: Scalars['String'];
};

export type GoogleModel = {
  readonly __typename?: 'GoogleModel';
  readonly avatar: Scalars['String'];
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly id: Scalars['String'];
  readonly isEnabledTwoFactorAuth: Scalars['Boolean'];
  readonly isVerifiedTwoFactorAuth: Scalars['Boolean'];
  readonly twoFactorAuthenticationSecret: Scalars['String'];
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly changePassword: ChangePasswordResponse;
  readonly createdUser: AuthUserResponse;
  readonly deleteAvatar: DeleteAvatarResponse;
  readonly get2faSecret: Get2faSecretResponse;
  readonly googleCreatedUser: AuthUserResponse;
  readonly sendEmail: Scalars['Boolean'];
  readonly updateUser: UpdateUserResponse;
  readonly uploadedAvatar: UploadAvatarResponse;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordDto;
};

export type MutationCreatedUserArgs = {
  data: CreateUserDto;
};

export type MutationGet2faSecretArgs = {
  data: Get2faSecretDto;
};

export type MutationGoogleCreatedUserArgs = {
  data: CreateGoogleUserDto;
};

export type MutationSendEmailArgs = {
  data: SendEmailDto;
};

export type MutationUpdateUserArgs = {
  data: UpdateUserDto;
};

export type MutationUploadedAvatarArgs = {
  data: UploadAvatarDto;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly fetchedUser: FetchUserResponse;
  readonly loggedUser: AuthUserResponse;
  readonly verifiedUser: VerifyUserResponse;
};

export type QueryFetchedUserArgs = {
  data: FetchUserDto;
};

export type QueryLoggedUserArgs = {
  data: SignInUserDto;
};

export type QueryVerifiedUserArgs = {
  data: VerifyUserDto;
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

export type UpdateUserDto = {
  readonly _id: Scalars['ID'];
  readonly payload: UserInput;
};

export type UpdateUserResponse = {
  readonly __typename?: 'UpdateUserResponse';
  readonly success: Scalars['Boolean'];
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
  readonly isEnabledTwoFactorAuth: Scalars['Boolean'];
  readonly isVerifiedTwoFactorAuth: Scalars['Boolean'];
  readonly password: Scalars['String'];
  readonly resetPasswordToken: Scalars['String'];
  readonly role: Scalars['String'];
  readonly twoFactorAuthenticationSecret: Scalars['String'];
};

export type UserInput = {
  readonly avatar?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly fullName?: InputMaybe<Scalars['String']>;
  readonly isEnabledTwoFactorAuth?: InputMaybe<Scalars['Boolean']>;
  readonly isVerifiedTwoFactorAuth?: InputMaybe<Scalars['Boolean']>;
};

export type VerifyUserDto = {
  readonly code: Scalars['String'];
  readonly email: Scalars['String'];
  readonly returnUser?: InputMaybe<Scalars['Boolean']>;
};

export type VerifyUserResponse = {
  readonly __typename?: 'VerifyUserResponse';
  readonly success: Scalars['Boolean'];
  readonly user?: Maybe<User>;
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
    readonly token?: string | null;
    readonly notVerified?: boolean | null;
    readonly user?: {
      readonly __typename?: 'User';
      readonly _id: string;
      readonly email: string;
      readonly fullName: string;
      readonly role: string;
      readonly avatar: string;
      readonly isEnabledTwoFactorAuth: boolean;
    } | null;
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
      readonly isEnabledTwoFactorAuth: boolean;
    };
  };
};

export type VerifyUserByAuthCodeQueryVariables = Types.Exact<{
  code: Types.Scalars['String'];
  email: Types.Scalars['String'];
  returnUser?: Types.InputMaybe<Types.Scalars['Boolean']>;
}>;

export type VerifyUserByAuthCodeQuery = {
  readonly __typename?: 'Query';
  readonly verifiedUser: { readonly __typename?: 'VerifyUserResponse'; readonly success: boolean; readonly user?: { readonly __typename?: 'User'; readonly _id: string } | null };
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
      isEnabledTwoFactorAuth
    }
    token
    notVerified
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
      isEnabledTwoFactorAuth
    }
  }
}
    `;
export const VerifyUserByAuthCodeDocument = `
    query verifyUserByAuthCode($code: String!, $email: String!, $returnUser: Boolean) {
  verifiedUser(data: {code: $code, email: $email, returnUser: $returnUser}) {
    success
    user {
      _id
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
    }),
    verifyUserByAuthCode: build.query<VerifyUserByAuthCodeQuery, VerifyUserByAuthCodeQueryVariables>({
      query: (variables) => ({ document: VerifyUserByAuthCodeDocument, variables })
    })
  })
});

export { injectedRtkApi as api };
export const { useSignInUserQuery, useLazySignInUserQuery, useFetchUserQuery, useLazyFetchUserQuery, useVerifyUserByAuthCodeQuery, useLazyVerifyUserByAuthCodeQuery } = injectedRtkApi;
