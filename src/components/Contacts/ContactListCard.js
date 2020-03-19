import React from "react";
import { useModal } from "../../utils";
import { ContactDetailEditModal } from "./ContactDetailEditModal";
import { ContactCard } from "./ContactCard";

export const ContactListCard = ({ contact }) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <ContactCard toggleDetail={toggle} contact={contact} />
      {isShowing && (
        <ContactDetailEditModal
          isShowingOverlay={isShowing}
          toggleOverlay={toggle}
          contactId={contact.id}
        />
      )}
    </>
  );
};
