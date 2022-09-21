import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
}

export interface Book {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
}

export interface Mutation {
  __typename?: 'Mutation';
  addBook?: Maybe<Book>;
}


export interface MutationAddBookArgs {
  author: Scalars['String'];
  title: Scalars['String'];
}

export interface Query {
  __typename?: 'Query';
  books?: Maybe<Array<Maybe<Book>>>;
}

export type AddBookMutationVariables = Exact<{
  title: Scalars['String'];
  author: Scalars['String'];
}>;


export type AddBookMutation = { __typename?: 'Mutation', addBook?: { __typename?: 'Book', title?: string | null, author?: string | null } | null };

export type BooksQueryVariables = Exact<{ [key: string]: never; }>;


export type BooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', author?: string | null, title?: string | null } | null> | null };

export const AddBookDocument = /*#__PURE__*/ gql`
    mutation AddBook($title: String!, $author: String!) {
  addBook(title: $title, author: $author) {
    title
    author
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddBookGQL extends Apollo.Mutation<AddBookMutation, AddBookMutationVariables> {
    document = AddBookDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const BooksDocument = /*#__PURE__*/ gql`
    query books {
  books {
    author
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class BooksGQL extends Apollo.Query<BooksQuery, BooksQueryVariables> {
    document = BooksDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }

      export interface PossibleTypesResultData {
        possibleTypes: {
          [key: string]: string[]
        }
      }
      const result: PossibleTypesResultData = {
  "possibleTypes": {}
};
      export default result;
    