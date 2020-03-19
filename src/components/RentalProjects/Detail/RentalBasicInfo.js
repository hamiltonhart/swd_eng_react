import React from "react";

import { SectionHeading, Typography } from "../../../styled/typography";
import { darkGrey } from "../../../styled/defaults";
import {
  SimpleDiv,
  GridWrapper,
  PositionWrapper
} from "../../../styled/containers";
import { EditBasicInfo } from "./ButtonModals/EditBasicInfo";

export const RentalBasicInfo = props => {
  return (
    <SimpleDiv
      gridColumn="1 / 2"
      gridRow="1"
      justifySelf="start"
      padding="15px 21px 50px 21px"
      position="relative"
      width="100%"
    >
      <SectionHeading gridColumn>Basic Information</SectionHeading>
      <GridWrapper
        padding="19px 30px"
        minWidth="100%"
        justifyItems="start"
        columns="1fr 125px 1fr"
      >
        <SimpleDiv padding="0" gridColumn="">
          <Typography padding="0 0 7px 0">{props.abbreviation}</Typography>
          <Typography padding="0 0 7px 0">
            {(props.primaryRoom && props.primaryRoom.room.name) || "---"}
          </Typography>
          <Typography padding="0 0 7px 0">{props.config}</Typography>
        </SimpleDiv>
        <SimpleDiv boxSizing="border-box">
          <Typography padding="0 0 7px 0" fontColor={darkGrey}>
            Drive Username:
          </Typography>
          <Typography padding="0 0 7px 0" fontColor={darkGrey}>
            Drive Password:
          </Typography>
          <Typography padding="0 0 7px 0" fontColor={darkGrey}>
            MS Username:
          </Typography>
          <Typography padding="0 0 7px 0" fontColor={darkGrey}>
            MS Password:
          </Typography>
        </SimpleDiv>
        <SimpleDiv boxSizing="border-box">
          <Typography padding="0 0 7px 0">
            {props.driveUser || "---"}
          </Typography>
          <Typography padding="0 0 7px 0">
            {props.drivePass || "---"}
          </Typography>
          <Typography padding="0 0 7px 0">{props.msUser || "---"}</Typography>
          <Typography padding="0 0 7px 0">{props.msPass || "---"}</Typography>
        </SimpleDiv>
      </GridWrapper>
      <PositionWrapper position="absolute" bottom="5%" right="10%">
        {/* <BlackButton small>Edit Basic Info</BlackButton> */}
        <EditBasicInfo />
      </PositionWrapper>
    </SimpleDiv>
  );
};
