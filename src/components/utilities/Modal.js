import React from "react";
import ReactDOM from "react-dom";
import { ModalOverlay, ModalWrapper } from "../../styled/containers";
import { Icon, CloseIcon } from "../../styled/icons";

export const Modal = ({ children, isShowing, toggle }) => {
  return isShowing
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
                  toggle();
                }}
              >
                <CloseIcon
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                />
              </Icon>

              {children}
            </ModalWrapper>
          </ModalOverlay>
        </>,
        document.body
      )
    : null;
};
