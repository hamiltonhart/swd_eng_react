import React from "react";
import { useModal } from "../../utils/";
import { Link } from "react-router-dom";

import { ContactDetailEditModal } from "../Contacts";

import { Typography } from "../../styled/typography";

export const RentalContact = ({ contactId, firstName, lastName, index }) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <Typography
        key={contactId}
        gridColumn="1"
        gridRow={`${index + 1}`}
        className="hover"
        fontSize="18px"
        cursor="pointer"
        hover
        onClick={e => toggle()}
      >
        {firstName} {lastName}
      </Typography>
      <ContactDetailEditModal
        toggleOverlay={toggle}
        isShowingOverlay={isShowing}
        contactId={contactId}
      />
    </>
  );
};
