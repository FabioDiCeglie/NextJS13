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
    createTask(content: String!, title: String!, id: String!): Task!
    deleteTask(id: String!): Task!
    createUser(id: String!, email: String!, password: String): User!
  }

  type User {
    id: String
    name: String
    email: String
    password: String
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
