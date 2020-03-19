import React, { useState } from "react";

import { NewDriveForm } from "./NewDriveForm";

import { PageHeading } from "../../styled/typography";
import { InputWrapper, FlexWrapper } from "../../styled/containers";
import { Modal } from "../utilities";

import { RedButton, BlackButton, InactiveButton } from "../../styled/buttons";

export const EditDriveModal = ({ driveId, isShowing, toggle }) => {
  const [driveNumber, setDriveNumber] = useState("1");
  const [driveCapacity, setDriveCapacity] = useState("2TB");
  const [driveQuantity, setDriveQuantity] = useState("1");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(driveNumber, driveCapacity, driveQuantity);
    toggle();
  };

  return (
    <Modal isShowing={isShowing} toggle={toggle}>
      <PageHeading>Edit Drive #</PageHeading>
      <FlexWrapper flexDirection="column" padding="0">
        <FlexWrapper
          as="form"
          minWidth="350px"
          maxWidth="350px"
          justifyContent="space-evenly"
          margin="0 0 0 0 "
          padding="10px"
          rowGap="30px"
          onSubmit={e => handleSubmit(e, toggle)}
        >
          <>
            <NewDriveForm
              driveNumber={driveNumber}
              capacity={driveCapacity}
              quantity={driveQuantity}
              setDriveNumber={setDriveNumber}
              setDriveCapacity={setDriveCapacity}
              setDriveQuantity={setDriveQuantity}
            />
          </>

          <InputWrapper gridColumn="4 / 10" width="100%">
            {driveNumber && driveCapacity && driveQuantity ? (
              <RedButton
                as="input"
                type="submit"
                minWidth="100%"
                value={"Confirm"}
              />
            ) : (
              <InactiveButton minWidth="100%" disabled>
                Confirm
              </InactiveButton>
            )}
          </InputWrapper>
        </FlexWrapper>
        <FlexWrapper padding="0 0 20px 0" justifyContent="space-between">
          <BlackButton small margin="0 10px">
            Delete
          </BlackButton>
          <BlackButton small margin="0 10px">
            Release
          </BlackButton>
        </FlexWrapper>
      </FlexWrapper>
    </Modal>
  );
};
