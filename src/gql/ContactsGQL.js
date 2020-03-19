import { gql } from "apollo-boost";

export const ALL_CONTACTS_QUERY = gql`
  query {
    contacts {
      id
      firstName
      lastName
      company
      title
      email
      phoneNumber
    }
  }
`;

export const CONTACT_QUERY = gql`
  query($id: Int!) {
    contact(id: $id) {
      id
      firstName
      lastName
      company
      title
      email
      phoneNumber
      notes
      rentalProjects {
        id
        project {
          id
          title
        }
      }
    }
  }
`;
