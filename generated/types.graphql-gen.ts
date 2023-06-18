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
