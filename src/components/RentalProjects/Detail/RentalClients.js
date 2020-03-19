import React from "react";
import { Link } from "react-router-dom";

import { RentalContact } from "../RentalContact";

import {
  SectionHeading,
  Typography,
  TextLink
} from "../../../styled/typography";
import { darkGrey } from "../../../styled/defaults";
import { Select, Label } from "../../../styled/forms";
import {
  SimpleDiv,
  GridWrapper,
  InputWrapper,
  PositionWrapper
} from "../../../styled/containers";
import { WhiteButton } from "../../../styled/buttons";

import { NewContactModal } from "../../Contacts";

export const RentalClients = ({ clients }) => {
  return (
    <SimpleDiv
      gridColumn="1 / 2"
      gridRow="1"
      justifySelf="start"
      padding="15px 21px 50px 21px"
      position="relative"
    >
      <SectionHeading gridColumn>Clients</SectionHeading>
      <GridWrapper padding="19px 30px" justifyItems="start" columns="1fr 1.5fr">
        <GridWrapper
          columns="1fr 1fr"
          margin="13px 8px 0 0"
          alignSelf="start"
          justifyItems="start"
          alignItems="baseline"
        >
          {clients.map((client, index) => (
            <RentalContact
              contactId={client.client.id}
              firstName={client.client.firstName}
              lastName={client.client.lastName}
              index={index}
            />
          ))}

          {clients.map((client, index) => (
            <Typography
              key={`${client.id}-${client.clientRole}`}
              gridColumn="2"
              gridRow={`${index + 1}`}
              fontColor={darkGrey}
            >
              {client.clientRole}
            </Typography>
          ))}
        </GridWrapper>
        <GridWrapper as="form" columns="1fr 1fr">
          <InputWrapper margin="13px 0 0 0">
            <Label>Client</Label>
            <Select>
              <option value="---">---</option>
              <option value="Option A">Option A</option>
            </Select>
          </InputWrapper>
          <InputWrapper margin="13px 0 0 0">
            <Label>Role</Label>
            <Select>
              <option value="---">---</option>
              <option value="Option A">Option A</option>
            </Select>
          </InputWrapper>
          <WhiteButton small borderThin minWidth="100%" padding="10px 20px">
            Remove Client
          </WhiteButton>
          <WhiteButton
            small
            borderThin
            minWidth="100%"
            padding="10px 20px"
            className="hover"
          >
            Add/Edit Client
          </WhiteButton>
        </GridWrapper>
        <PositionWrapper position="absolute" bottom="5%" right="10%">
          <NewContactModal blackButton />
        </PositionWrapper>
      </GridWrapper>
    </SimpleDiv>
  );
};

// <GridWrapper padding="19px 30px" minWidth="100%" justifyItems="start">
// </GridWrapper>
