import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useModal } from "../../utils";

import { Modal } from "../utilities";
import { PageHeading, TextLink } from "../../styled/typography";
import {
  GridWrapper,
  InputWrapper,
  PositionWrapper,
  SimpleSpan
} from "../../styled/containers";
import { Input, Label, Select, Required } from "../../styled/forms";
import { RedButton, InactiveButton, RoundButton } from "../../styled/buttons";

export const NewRentalModal = ({ homeButton }) => {
  const [title, setTitle] = useState("");
  const [abbr, setAbbr] = useState("");
  const [ptVers, setPtVers] = useState("");
  const [googleDrive, setGoogleDrive] = useState("");
  const [season, setSeason] = useState("");
  const [startDate, setStartDate] = useState("");

  const { isShowing, toggle } = useModal();

  return (
    <>
      {homeButton ? (
        <RedButton small onClick={() => toggle()}>
          New Rental
        </RedButton>
      ) : (
        <PositionWrapper position="fixed" bottom="5%" right="4%">
          <RoundButton onClick={() => toggle()}>+</RoundButton>
        </PositionWrapper>
      )}
      <Modal isShowing={isShowing} toggle={toggle}>
        <PageHeading>New Rental</PageHeading>
        <GridWrapper
          as="form"
          minWidth="622px;"
          maxWidth="622px;"
          margin="20px 0 0 0 "
        >
          <InputWrapper gridColumn="span 6">
            <Label>
              Title <Required>*</Required>
            </Label>
            <Input
              placeholder="Star Wars"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper gridColumn="span 2">
            <Label>Season</Label>
            <Input
              placeholder="1"
              value={season}
              onChange={e => setSeason(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper gridColumn="span 4">
            <Label>
              Abbreviation <Required>*</Required>
            </Label>
            <Input
              placeholder="starwars "
              value={abbr}
              onChange={e => setAbbr(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper gridColumn="span 3">
            <Label>
              Pro Tools Version <Required>*</Required>
            </Label>
            <Input
              placeholder="19.10 "
              value={ptVers}
              onChange={e => setPtVers(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper gridColumn="span 3">
            <Label>
              Config <Required>*</Required>
            </Label>
            <Select>
              <option value="ST">Stereo</option>
              <option value="51" selected>
                5.1
              </option>
              <option value="71">7.1</option>
              <option value="ATMOS">ATMOS</option>
              <option value="DTS">DTS</option>
              <option value="IMAX6">IMAX 6</option>
              <option value="IMAX12">IMAX 12</option>
            </Select>
          </InputWrapper>

          <InputWrapper gridColumn="span 3">
            <Label>Start Date</Label>
            <Input
              as={InputMask}
              mask="99/99/9999"
              placeholder="01/01/2020"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper gridColumn="span 12">
            <Label>
              GoogleDrive <Required>*</Required>{" "}
              <SimpleSpan paddingLeft="50px"></SimpleSpan>
              <TextLink href="www.google.com" target="_blank">
                Create Folder
              </TextLink>
            </Label>
            <Input
              placeholder="drive.google.com "
              value={googleDrive}
              onChange={e => setGoogleDrive(e.target.value)}
            />
          </InputWrapper>

          <InputWrapper gridColumn="4 / 10">
            {title && abbr && ptVers && googleDrive ? (
              <RedButton minWidth="100%">{`Create ${title}`}</RedButton>
            ) : (
              <InactiveButton minWidth="100%" disabled>
                Create Rental Project
              </InactiveButton>
            )}
          </InputWrapper>
        </GridWrapper>
      </Modal>
    </>
  );
};
