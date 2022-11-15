import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Query {
    notes: [Note]!
    user(id: String!): User!
    users: [User]!
    tasks: [Task]!
  }

  type Mutation {
    createNote(content: String!, title: String!, id: String!): Note!
    deleteNote(id: String!): Note!
    deleteTask(id: String!): Task!
  }

  type User {
    id: String
    name: String
    email: String
    notes: [Note]!
  }

  type Note {
    id: String
    title: String
    content: String
    author: [User]!
    authorId: String
  }

  type Task {
    id: String
    title: String
    content: String
    author: [User]!
    authorId: String
  }
`;
