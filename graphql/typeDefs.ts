import { gql } from 'apollo-server-micro';

export const typeDefs = gql`
  type Note {
    id: String
    title: String
    content: String
    authorId: String
  }

  type Query {
    notes: [Note]!
  }
`;
