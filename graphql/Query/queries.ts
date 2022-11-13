import { gql } from '@apollo/client';

export const AllNotesQuery = gql`
  query {
    notes {
      id
      title
      content
    }
  }
`;
