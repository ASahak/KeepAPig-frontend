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
    readonly token?: string | null;
    readonly user?: { readonly __typename?: 'User'; readonly _id: string; readonly email: string; readonly fullName: string; readonly role: string } | null;
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
    readonly token?: string | null;
    readonly user?: {
      readonly __typename?: 'User';
      readonly _id: string;
      readonly email: string;
      readonly fullName: string;
      readonly role: string;
      readonly google: { readonly __typename?: 'GoogleModel'; readonly id: string; readonly avatar: string };
    } | null;
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

export type DeleteAvatarMutationVariables = Types.Exact<{ [key: string]: never }>;

export type DeleteAvatarMutation = { readonly __typename?: 'Mutation'; readonly deleteAvatar: { readonly __typename?: 'DeleteAvatarResponse'; readonly success: boolean } };

export type UpdateUserMutationVariables = Types.Exact<{
  data: Types.UpdateUserDto;
}>;

export type UpdateUserMutation = { readonly __typename?: 'Mutation'; readonly updateUser: { readonly __typename?: 'UpdateUserResponse'; readonly success: boolean } };

export type Create2faSecretMutationVariables = Types.Exact<{
  data: Types.Get2faSecretDto;
}>;

export type Create2faSecretMutation = { readonly __typename?: 'Mutation'; readonly get2faSecret: { readonly __typename?: 'Get2faSecretResponse'; readonly otpAuthUrl: string } };

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
export const DeleteAvatarDocument = `
    mutation deleteAvatar {
  deleteAvatar {
    success
  }
}
    `;
export const UpdateUserDocument = `
    mutation updateUser($data: UpdateUserDto!) {
  updateUser(data: $data) {
    success
  }
}
    `;
export const Create2faSecretDocument = `
    mutation create2faSecret($data: Get2faSecretDto!) {
  get2faSecret(data: $data) {
    otpAuthUrl
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
    }),
    deleteAvatar: build.mutation<DeleteAvatarMutation, DeleteAvatarMutationVariables | void>({
      query: (variables) => ({ document: DeleteAvatarDocument, variables })
    }),
    updateUser: build.mutation<UpdateUserMutation, UpdateUserMutationVariables>({
      query: (variables) => ({ document: UpdateUserDocument, variables })
    }),
    create2faSecret: build.mutation<Create2faSecretMutation, Create2faSecretMutationVariables>({
      query: (variables) => ({ document: Create2faSecretDocument, variables })
    })
  })
});

export { injectedRtkApi as api };
export const { useSignUpUserMutation, useSignUpGoogleUserMutation, useChangePasswordMutation, useUploadAvatarMutation, useDeleteAvatarMutation, useUpdateUserMutation, useCreate2faSecretMutation } =
  injectedRtkApi;
