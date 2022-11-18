import { gql } from '@apollo/client';

export const getNotes = gql`
  query {
    notes {
      id
      title
      content
    }
  }
`;

export const getTasks = gql`
  query {
    tasks {
      id
      title
      content
    }
  }
`;
