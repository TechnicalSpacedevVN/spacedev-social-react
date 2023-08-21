/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Date custom scalar type */
  Date: { input: any; output: any; }
};

export type Friend = {
  __typename?: 'Friend';
  createdAt?: Maybe<Scalars['Date']['output']>;
  receiver?: Maybe<User>;
  sender?: Maybe<User>;
  updatedAt?: Maybe<Scalars['Date']['output']>;
};

export type Post = {
  __typename?: 'Post';
  content?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  friends?: Maybe<Array<Maybe<Friend>>>;
  myFriends?: Maybe<Array<Maybe<Friend>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
  userFriends?: Maybe<Array<Maybe<User>>>;
  users?: Maybe<Array<Maybe<User>>>;
};


export type QueryFriendsArgs = {
  q?: InputMaybe<Scalars['String']['input']>;
};


export type QueryUsersArgs = {
  q: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type UserFragment = { __typename?: 'User', avatar?: string | null, name?: string | null, _id?: string | null };

export type GetUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', avatar?: string | null, name?: string | null, _id?: string | null } | null> | null };

export const UserFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]} as unknown as DocumentNode<UserFragment, unknown>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"q"},"value":{"kind":"StringValue","value":"Vương","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"User"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"User"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"_id"}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;