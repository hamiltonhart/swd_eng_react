import React, { useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import { DRIVES_QUERY } from "../gql";

import {
  MainWrapper,
  PageHeadingWrapper,
  GridWrapper,
  FlexWrapper,
  InputWrapper
} from "../styled/containers";
import { PageHeading } from "../styled/typography";
import { DriveCard, DriveInfo } from "../components/Drives";
import { Select, Input, Label } from "../styled/forms";
import { Icon, SearchIcon } from "../styled/icons";
import { NewDriveModal } from "../components/Drives";

const DrivesListPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = useQuery(DRIVES_QUERY);

  return (
    <MainWrapper>
      <PageHeadingWrapper>
        <PageHeading>Drives</PageHeading>
      </PageHeadingWrapper>

      <FlexWrapper justifyContent="space-between">
        <InputWrapper width="none">
          <Label>Sorting</Label>
          <Select defaultValue="available" minWidth="212px">
            <option value="all">All</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </Select>
        </InputWrapper>

        <InputWrapper width="auto">
          <Label>Search</Label>
          <Input
            placeholder="Number or Rental"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            padding="17px 50px 17px 32px"
          />
          <Icon
            position="absolute"
            top="45%"
            right="10%"
            svgWidth="20px"
            cursor="pointer"
          >
            <SearchIcon />
          </Icon>
        </InputWrapper>
      </FlexWrapper>

      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && (
        <>
          <FlexWrapper
            justifyContent="space-around"
            padding="19px 100px 64px 100px"
          >
            <DriveInfo capacity="250GB" quantity="0" />
            <DriveInfo capacity="500GB" quantity="0" />
            <DriveInfo capacity="1TB" quantity="20" />
            <DriveInfo capacity="2TB" quantity="40" />
          </FlexWrapper>
          <GridWrapper padding="0 0 20px 0">
            {data.drives.map(drive => (
              <DriveCard key={drive.id} drive={drive} />
            ))}
          </GridWrapper>
        </>
      )}

      <NewDriveModal />
    </MainWrapper>
  );
};

export default DrivesListPage;
