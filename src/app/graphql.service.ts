// Angular
import { Injectable } from '@angular/core';

// Apollo
import { gql } from 'apollo-angular';
import { Apollo, Mutation as ApolloMutation, Query as ApolloQuery } from 'apollo-angular';


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

export type Books = Book[];

export type BookQuery = Maybe<Book> | undefined;

export interface Mutation {
  __typename?: 'Mutation';
  addBook?: BookQuery;
}

export interface MutationAddBookArgs {
  author: Scalars['String'];
  title: Scalars['String'];
}

export type AddBookMutationVariables = Exact<{
  author: Scalars['String'];
  title: Scalars['String'];
}>;

export type AddBookMutation = {
  __typename?: 'Mutation',
  addBook?: Maybe<Book>,
};

export type BooksQueryVariables = Exact<Record<string, never>>;

export type BooksQuery = {
  __typename?: 'Query',
  books?: Maybe<Books>,
};

export const AddBookDocument = /*#__PURE__*/ gql`
mutation AddBook($title: String!, $author: String!) {
  addBook(title: $title, author: $author) {
    title
    author
  }
}
`;

@Injectable({
  providedIn: 'root',
})
export class AddBookGQL extends ApolloMutation<AddBookMutation, AddBookMutationVariables> {
  document = AddBookDocument;

  constructor(apollo: Apollo) {
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
export class BooksGQL extends ApolloQuery<BooksQuery, BooksQueryVariables> {
  document = BooksDocument;

  constructor(apollo: Apollo) {
    super(apollo);
  }
}

export interface PossibleTypesResultData {
  possibleTypes: Record<string, string[]>;
}

const result: PossibleTypesResultData = {
  possibleTypes: {},
};

export default result;
