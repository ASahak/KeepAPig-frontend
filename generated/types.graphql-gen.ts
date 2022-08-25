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

export type CreateUserInputType = {
  readonly email: Scalars['String'];
  readonly fullName: Scalars['String'];
  readonly password: Scalars['String'];
  readonly role: Scalars['String'];
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
  readonly createdUser: AuthUserResponse;
  readonly googleCreatedUser: AuthUserResponse;
};


export type MutationCreatedUserArgs = {
  data: CreateUserInputType;
};


export type MutationGoogleCreatedUserArgs = {
  data: GoogleUserInputType;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly getUser: User;
  readonly loggedUser: AuthUserResponse;
  readonly user: ReadonlyArray<User>;
};


export type QueryLoggedUserArgs = {
  data: SignInUserInputType;
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
  readonly role: Scalars['String'];
};
