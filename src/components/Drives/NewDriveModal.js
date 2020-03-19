import React, { useState } from "react";
import { useModal } from "../../utils";
import { NewDriveForm } from "./NewDriveForm";

import { Modal } from "../utilities";
import { PageHeading } from "../../styled/typography";
import {
  InputWrapper,
  PositionWrapper,
  FlexWrapper
} from "../../styled/containers";

import { RedButton, RoundButton, InactiveButton } from "../../styled/buttons";

export const NewDriveModal = ({ homeButton }) => {
  const { isShowing, toggle } = useModal();
  const [driveNumber, setDriveNumber] = useState("1");
  const [driveCapacity, setDriveCapacity] = useState("2TB");
  const [driveQuantity, setDriveQuantity] = useState("1");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(driveNumber, driveCapacity, driveQuantity);
    toggle();
  };

  return (
    <>
      {homeButton ? (
        <RedButton small onClick={() => toggle()}>
          New Drive
        </RedButton>
      ) : (
        <PositionWrapper position="fixed" bottom="5%" right="4%">
          <RoundButton onClick={() => toggle()}>+</RoundButton>
        </PositionWrapper>
      )}
      <Modal isShowing={isShowing} toggle={toggle}>
        <PageHeading>Add Drives</PageHeading>
        <FlexWrapper
          as="form"
          minWidth="350px"
          maxWidth="350px"
          justifyContent="space-evenly"
          margin="0 0 0 0 "
          padding="30px 20px 20px 30px"
          rowGap="30px"
          onSubmit={e => handleSubmit(e)}
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
                value={"Create Drives"}
              />
            ) : (
              <InactiveButton minWidth="100%" disabled>
                Create Drives
              </InactiveButton>
            )}
          </InputWrapper>
        </FlexWrapper>
      </Modal>
    </>
  );
};
