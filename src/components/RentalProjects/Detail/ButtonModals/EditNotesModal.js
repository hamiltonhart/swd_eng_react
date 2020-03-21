import React, { useState } from "react";
import { useModal } from "../../../../utils";

import { Modal, ModalArea, ModalCloseIcon } from "../../../utilities";
import { PageHeading } from "../../../../styled/typography";
import { GridWrapper, InputWrapper } from "../../../../styled/containers";
import { Textarea } from "../../../../styled/forms";
import { RedButton, BlackButton } from "../../../../styled/buttons";

export const EditNotesModal = ({ redButton, roundButton, blackButton }) => {
  const [notes, setNotes] = useState("");

  const { isShowing, toggle } = useModal();

  return (
    <>
      <BlackButton small onClick={() => toggle()}>
        Edit Notes
      </BlackButton>

      <Modal isShowing={isShowing}>
        <ModalArea>
          <ModalCloseIcon toggle={toggle} />

          <PageHeading>Edit Notes</PageHeading>
          <GridWrapper
            as="form"
            minWidth="622px;"
            maxWidth="622px;"
            margin="20px 0 0 0 "
          >
            <InputWrapper gridColumn="span 12">
              <Textarea
                rows="20"
                value={notes}
                onChange={e => setNotes(e.target.value)}
              />
            </InputWrapper>
            <InputWrapper gridColumn="4 / 10">
              <RedButton minWidth="100%">{`Submit`}</RedButton>
            </InputWrapper>
          </GridWrapper>
        </ModalArea>
      </Modal>
    </>
  );
};
