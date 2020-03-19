import React from "react";

import { SectionHeading } from "../../../styled/typography";

import { SimpleDiv, PositionWrapper } from "../../../styled/containers";
import { EditNotesModal } from "./ButtonModals";

export const RentalNotes = ({ notes }) => {
  return (
    <SimpleDiv
      gridColumn="1 / 2"
      justifySelf="start"
      padding="15px 21px 50px 21px"
      position="relative"
    >
      <SectionHeading gridColumn>Notes</SectionHeading>
      <SimpleDiv padding="19px 30px">{notes || "No notes"}</SimpleDiv>
      <PositionWrapper position="absolute" bottom="5%" right="10%">
        <EditNotesModal />
      </PositionWrapper>
    </SimpleDiv>
  );
};
