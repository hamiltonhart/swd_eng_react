import React, { useState } from "react";
import { useQuery } from "@apollo/react-hooks";

import { ALL_CONTACTS_QUERY } from "../gql";

import {
  MainWrapper,
  PageHeadingWrapper,
  GridWrapper,
  FlexWrapper,
  InputWrapper
} from "../styled/containers";
import { PageHeading } from "../styled/typography";

import { Select, Input, Label } from "../styled/forms";
import { Icon, SearchIcon } from "../styled/icons";
import { NewContactModal } from "../components/Contacts";

import { ContactListCard } from "../components/Contacts/ContactListCard";

const ContactsListPage = () => {
  const [searchValue, setSearchValue] = useState("");

  const { data, loading, error } = useQuery(ALL_CONTACTS_QUERY);

  return (
    <MainWrapper>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && (
        <>
          <PageHeadingWrapper>
            <PageHeading>Contacts</PageHeading>
          </PageHeadingWrapper>

          <FlexWrapper justifyContent="space-between">
            <InputWrapper width="none">
              <Label>Sorting</Label>
              <Select defaultValue="first" minWidth="212px">
                <option value="first">First Name</option>
                <option value="last">Last Name</option>
              </Select>
            </InputWrapper>

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

          <GridWrapper padding="20px 20px">
            {data.contacts.map(contact => (
              <ContactListCard contact={contact} />
            ))}
          </GridWrapper>
          <NewContactModal roundButton />
        </>
      )}
    </MainWrapper>
  );
};

export default ContactsListPage;
