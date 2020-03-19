import { gql } from "apollo-boost";

export const DRIVES_QUERY = gql`
  query {
    drives {
      id
      driveNumber
      driveCapacityGb
      rentalProjects {
        id
        project {
          id
          title
        }
      }
      currentProject {
        id
        title
        season
      }
    }
  }
`;
