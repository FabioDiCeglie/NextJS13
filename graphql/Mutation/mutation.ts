import { gql } from '@apollo/client';

export const CREATE_NOTE = gql`
  mutation ($id: String!, $title: String!, $content: String!) {
    createNote(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;
