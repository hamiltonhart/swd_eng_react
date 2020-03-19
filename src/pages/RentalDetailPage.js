import React from "react";

import {
  RentalBasicInfo,
  RentalClients,
  RentalNotes,
  RentalButtons,
  RentalDates,
  RentalDrives
} from "../components/RentalProjects/Detail";

import {
  MainWrapper,
  PageHeadingWrapper,
  GridWrapper,
  SimpleDiv
} from "../styled/containers";
import { PageHeading, PageSubheading } from "../styled/typography";

import { useQuery } from "@apollo/react-hooks";
import { GET_RENTAL_QUERY } from "../gql";

const RentalDetailPage = props => {
  const { data, loading, error } = useQuery(GET_RENTAL_QUERY, {
    variables: {
      id: props.location.state
        ? props.location.state.rentalId
        : window.location.pathname.slice(9)
    }
  });

  return (
    <MainWrapper>
      {loading && <h1>Loading</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {data && (
        <>
          <PageHeadingWrapper>
            <PageHeading>{data.rentalProject.title}</PageHeading>
            {data.rentalProject.season && (
              <PageSubheading>
                Season {data.rentalProject.season}
              </PageSubheading>
            )}
          </PageHeadingWrapper>
          <GridWrapper columns="65% 35%" columnGap="30px">
            <SimpleDiv>
              <RentalBasicInfo
                abbreviation={data.rentalProject.abbreviation}
                room={data.rentalProject.primaryRoom}
                config={data.rentalProject.channelConfig}
                driveUser={data.rentalProject.driveUser}
                drivePass={data.rentalProject.drivePass}
                msUser={data.rentalProject.msUser}
                msPass={data.rentalProject.msPass}
              />
              <RentalClients clients={data.rentalProject.rentalClients} />
              <RentalNotes notes={data.rentalProject.additionalInfo} />
            </SimpleDiv>
            <SimpleDiv gridColumn="2/3" alignSelf="start" width="100%">
              <RentalButtons
                primaryRoomId={
                  data.rentalProject.primaryRoom &&
                  data.rentalProject.primaryRoom.id
                }
                projectId={data.rentalProject.id}
                filesLink={data.rentalProject.filesLink}
              />
              <RentalDates
                startDate={data.rentalProject.startDate}
                mixingCompleteDate={data.rentalProject.mixingCompleteDate}
                projectCompleteDate={data.rentalProject.projectCompleteDate}
              />
              <RentalDrives
                totalDrives={data.rentalProject.totalDrives}
                totalStorage={data.rentalProject.totalStorage}
                drives={data.rentalProject.rentalDrives}
              />
            </SimpleDiv>
          </GridWrapper>
        </>
      )}
    </MainWrapper>
  );
};

export default RentalDetailPage;
