// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getAuthor(id: Int!): Author
    getBook(id: Int!): Book
    getBooks: [Book]
    getAuthors: [Author]
    getBookInfo: [Book]
  }
  type Mutation {
    addBook(label: String!, author_id: Int!): Boolean!
    addAuthor(name: String!): Boolean!
  }
  type Book {
    book_id: Int!
    label: String!
    author_id: Int!
  }
  type Author {
    author_id: Int!
    name: String!
  }
`;
