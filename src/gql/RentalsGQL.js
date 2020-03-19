import { gql } from "apollo-boost";

export const GET_RENTALS_QUERY = gql`
  query {
    rentalProjects {
      id
      title
      abbreviation
      season
      primaryRoom {
        id
        room {
          id
          name
        }
      }
      totalDrives
      channelConfig
      filesLink
    }
  }
`;

export const GET_RENTAL_QUERY = gql`
  query($id: Int!) {
    rentalProject(id: $id) {
      id
      title
      abbreviation
      season
      primaryRoom {
        id
        room {
          id
          name
        }
      }
      totalDrives
      channelConfig
      filesLink
      driveUser
      drivePass
      msUser
      msPass
      additionalInfo
      startDate
      mixingCompleteDate
      projectCompleteDate
      totalStorage
      rentalClients {
        id
        client {
          id
          firstName
          lastName
        }
        clientRole
      }
      rentalDrives {
        id
        drive {
          id
          driveNumber
          driveCapacityGb
        }
      }
    }
  }
`;

export const GET_PRIMARY_ROOM_QUERY = gql`
  query($id: Int!) {
    primaryRoom(id: $id) {
      id
      room {
        id
        name
        mediaShuttleConnectionIp
        mediaShuttleSubnet
        mediaShuttleHost
        mediaShuttleIpRange
      }
      msClients {
        id
        clientMs
        projectClient {
          id
          client {
            id
            firstName
            lastName
          }
        }
      }
    }
  }
`;

export const GET_ROOMS_QUERY = gql`
  query($id: Int!) {
    projectRooms(id: $id) {
      id
      primaryRoom
      room {
        id
        name
      }
    }
  }
`;
