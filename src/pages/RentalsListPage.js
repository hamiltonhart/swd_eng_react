import React, { useState } from "react";

import { useQuery } from "@apollo/react-hooks";
import { GET_RENTALS_QUERY } from "../gql";

import {
  MainWrapper,
  PageHeadingWrapper,
  GridWrapper,
  FlexWrapper,
  InputWrapper
} from "../styled/containers";
import { PageHeading } from "../styled/typography";
import { RentalCard } from "../components/RentalProjects";
import { Select, Input, Label } from "../styled/forms";
import { Icon, SearchIcon } from "../styled/icons";

import { NewRentalModal } from "../components/RentalProjects";

const RentalsListPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = useQuery(GET_RENTALS_QUERY);

  return (
    <MainWrapper>
      <PageHeadingWrapper>
        <PageHeading>Rentals</PageHeading>
      </PageHeadingWrapper>

      <FlexWrapper justifyContent="space-between">
        <FlexWrapper>
          <InputWrapper width="none" margin="0 5px">
            <Label>Status</Label>
            <Select defaultValue="current" minWidth="212px">
              <option value="all">All</option>
              <option value="current">Current</option>
              <option value="completed">Completed</option>
              <option value="erased">Erased</option>
            </Select>
          </InputWrapper>
          <InputWrapper width="none" margin="0 5px">
            <Label>Config</Label>
            <Select defaultValue="all" minWidth="212px">
              <option value="all">All</option>
              <option value="ST">Stereo</option>
              <option value="51">5.1</option>
              <option value="71">7.1</option>
              <option value="ATMOS">ATMOS</option>
              <option value="IMAX6">IMAX 6</option>
              <option value="IMAX12">IMAX 12</option>
            </Select>
          </InputWrapper>
          <InputWrapper width="none" margin="0 5px">
            <Label>Type</Label>
            <Select defaultValue="all" minWidth="212px">
              <option value="all">All</option>
              <option value="features">Features</option>
              <option value="series">Series</option>
            </Select>
          </InputWrapper>
        </FlexWrapper>

        <InputWrapper width="auto">
          <Label>Search</Label>
          <Input
            placeholder="First, Last, Title, Company"
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
        <GridWrapper padding="20px 20px">
          {data.rentalProjects.map(rental => (
            <RentalCard key={rental.id} rental={rental} />
          ))}
        </GridWrapper>
      )}

      <NewRentalModal />
    </MainWrapper>
  );
};

export default RentalsListPage;
