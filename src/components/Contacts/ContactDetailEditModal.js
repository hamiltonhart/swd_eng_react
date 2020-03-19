import React from "react";
import ReactDOM from "react-dom";
import { useModal } from "../../utils/useModal";

import {
  ModalOverlay,
  ModalWrapper,
  FlexWrapper
} from "../../styled/containers";
import { Icon, CloseIcon } from "../../styled/icons";
import { ContactDetailModal } from "./ContactDetailModal";
import { EditContactModal } from "./EditContactModal";
import { BlackButton } from "../../styled/buttons";

export const ContactDetailEditModal = ({
  toggleOverlay,
  isShowingOverlay,
  contactId
}) => {
  const { isShowing, toggle } = useModal();

  return isShowingOverlay
    ? ReactDOM.createPortal(
        <>
          <ModalOverlay>
            <ModalWrapper>
              <Icon
                position="absolute"
                top="42px"
                right="60px"
                cursor="pointer"
                onClick={e => {
                  e.stopPropagation();
                  isShowing ? toggle() : toggleOverlay();
                }}
              >
                <CloseIcon
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                />
              </Icon>
              {isShowing ? (
                <EditContactModal
                  toggleOverlay={toggleOverlay}
                  toggleEdit={toggle}
                  contactId={contactId}
                />
              ) : (
                <ContactDetailModal
                  toggleEdit={toggle}
                  isShowingEdit={isShowing}
                  contactId={contactId}
                />
              )}
              <FlexWrapper padding="0">
                {!isShowing && (
                  <BlackButton small onClick={e => toggle()}>
                    Edit
                  </BlackButton>
                )}
              </FlexWrapper>
            </ModalWrapper>
          </ModalOverlay>
        </>,
        document.body
      )
    : null;
};

//   <ModalWrapper>
//     <Icon
//       position="absolute"
//       top="42px"
//       right="60px"
//       cursor="pointer"
//       onClick={e => {
//         e.stopPropagation();
//         toggleOverlay();
//       }}
//     >
//       <CloseIcon
//         className="modal-close-button"
//         data-dismiss="modal"
//         aria-label="Close"
//       />
//     </Icon>

//     {children}
//   </ModalWrapper>
