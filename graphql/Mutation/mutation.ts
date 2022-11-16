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

export const DELETE_NOTE = gql`
  mutation ($id: String!) {
    deleteNote(id: $id) {
      id
    }
  }
`;

export const DELETE_TASK = gql`
  mutation ($id: String!) {
    deleteTask(id: $id) {
      id
    }
  }
`;

export const CREATE_TASK = gql`
  mutation ($id: String!, $title: String!, $content: String!) {
    createTask(id: $id, title: $title, content: $content) {
      id
      title
      content
    }
  }
`;

export const CREATE_USER = gql`
  mutation ($id: String!, $email: String!, $password: String!) {
    createUser(id: $id, email: $email, password: $password) {
      id
      email
      password
    }
  }
`;
