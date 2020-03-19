import React, { useState } from "react";
import { useModal } from "../../../../utils";

import { Modal } from "../../../utilities";
import { PageHeading, TextLink } from "../../../../styled/typography";
import {
  GridWrapper,
  InputWrapper,
  SimpleSpan
} from "../../../../styled/containers";
import { Input, Label, Select, Required } from "../../../../styled/forms";
import {
  RedButton,
  InactiveButton,
  BlackButton
} from "../../../../styled/buttons";

export const EditBasicInfo = ({ homeButton }) => {
  const [title, setTitle] = useState("");
  const [abbr, setAbbr] = useState("");
  const [driveUser, setDriveUser] = useState("");
  const [drivePass, setDrivePass] = useState("");
  const [msUser, setMsUser] = useState("");
  const [msPass, setMsPass] = useState("");
  const [googleDrive, setGoogleDrive] = useState("");
  const [season, setSeason] = useState("");

  const { isShowing, toggle } = useModal();

  return (
    <>
      <BlackButton small onClick={e => toggle()}>
        Edit Basic Info
      </BlackButton>

      <Modal isShowing={isShowing} toggle={toggle}>
        <PageHeading>Edit Info</PageHeading>
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

          <InputWrapper gridColumn="span 4" gridRow="2">
            <Label>
              Abbreviation <Required>*</Required>
            </Label>
            <Input
              placeholder="starwars "
              value={abbr}
              onChange={e => setAbbr(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 4" gridRow="3">
            <Label>Drive Username</Label>
            <Input
              placeholder="starwars "
              value={driveUser || abbr}
              onChange={e => setDriveUser(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 4" gridRow="3">
            <Label>Drive Password</Label>
            <Input
              placeholder="starwars "
              value={drivePass || abbr}
              onChange={e => setDrivePass(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 4" gridRow="4">
            <Label>MS Username</Label>
            <Input
              placeholder="starwars "
              value={msUser || abbr}
              onChange={e => setMsUser(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 4" gridRow="4">
            <Label>MS Password</Label>
            <Input
              placeholder="starwars "
              value={msPass || abbr}
              onChange={e => setMsPass(e.target.value)}
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
            {title && abbr && googleDrive ? (
              <RedButton minWidth="100%">{`Create ${title}`}</RedButton>
            ) : (
              <InactiveButton minWidth="100%" disabled>
                Update Rental Project
              </InactiveButton>
            )}
          </InputWrapper>
        </GridWrapper>
      </Modal>
    </>
  );
};
