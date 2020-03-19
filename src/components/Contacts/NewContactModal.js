import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useModal } from "../../utils";

import { Modal } from "../utilities";
import { PageHeading } from "../../styled/typography";
import {
  GridWrapper,
  InputWrapper,
  PositionWrapper
} from "../../styled/containers";
import { Input, Label, Select, Textarea, Required } from "../../styled/forms";
import {
  RedButton,
  InactiveButton,
  RoundButton,
  BlackButton
} from "../../styled/buttons";

export const NewContactModal = ({ redButton, roundButton, blackButton }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");

  const { isShowing, toggle } = useModal();

  return (
    <>
      {redButton && (
        <RedButton small onClick={() => toggle()}>
          New Contact
        </RedButton>
      )}
      {blackButton && (
        <BlackButton small onClick={() => toggle()}>
          New Contact
        </BlackButton>
      )}
      {roundButton && (
        <PositionWrapper position="fixed" bottom="5%" right="4%">
          <RoundButton onClick={() => toggle()}>+</RoundButton>
        </PositionWrapper>
      )}
      <Modal isShowing={isShowing} toggle={toggle}>
        <PageHeading>New Contact</PageHeading>
        <GridWrapper
          as="form"
          minWidth="622px;"
          maxWidth="622px;"
          margin="20px 0 0 0 "
        >
          <InputWrapper gridColumn="span 6">
            <Label>
              FirstName <Required>*</Required>
            </Label>
            <Input
              placeholder="John (required)"
              value={firstName}
              required
              onChange={e => setFirstName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 6">
            <Label>
              LastName <Required>*</Required>
            </Label>
            <Input
              placeholder="Doe (required)"
              value={lastName}
              required
              onChange={e => setLastName(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 6">
            <Label>Company</Label>
            <Input
              placeholder="Technicolor"
              value={company}
              onChange={e => setCompany(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 6">
            <Label>Title</Label>
            <Input
              placeholder="Mixer"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 2">
            <Label>Country</Label>
            <Select>
              <option value="US" default>
                US
              </option>
              <option value="UK">UK</option>
              <option value="CA">CA</option>
            </Select>
          </InputWrapper>
          <InputWrapper gridColumn="span 4">
            <Label>Phone Number</Label>
            <Input
              as={InputMask}
              mask="(999) 999-9999"
              placeholder="(555) 555-5555"
              value={phone}
              onChange={
                e => setPhone(e.target.value)
                //   e.target.value.isNaN ? null : setPhone(e.target.value)
              }
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 6">
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="johndoe@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="span 12">
            <Label>Notes</Label>
            <Textarea
              placeholder="Something that may be useful to know."
              value={notes}
              onChange={e => setNotes(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper gridColumn="4 / 10">
            {firstName && lastName ? (
              <RedButton minWidth="100%">{`Create ${firstName}`}</RedButton>
            ) : (
              <InactiveButton minWidth="100%" disabled>
                Create Contact
              </InactiveButton>
            )}
          </InputWrapper>
        </GridWrapper>
      </Modal>
    </>
  );
};
