import React from "react";
import { Link } from "react-router-dom";

import { PageHeading, Typography, TextLink } from "../../styled/typography";
import { midGrey } from "../../styled/defaults";
import { GridWrapper, SimpleDiv } from "../../styled/containers";

export const ContactDetailModal = ({ contact }) => {
  return (
    <>
      <PageHeading>{`${contact.firstName} ${contact.lastName}`}</PageHeading>
      <GridWrapper maxWidth="366px" margin="29px 0" rowGap="12px">
        <SimpleDiv gridColumn="span 3" justifySelf="right">
          <Typography fontColor={midGrey}>Company</Typography>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 9" justifySelf="left">
          <Typography>{contact.company || "---"}</Typography>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 3" justifySelf="right">
          <Typography fontColor={midGrey}>Title</Typography>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 9" justifySelf="left">
          <Typography>{contact.title || "---"}</Typography>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 3" justifySelf="right">
          <Typography fontColor={midGrey}>Phone</Typography>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 9" justifySelf="left">
          <TextLink
            href={(contact.phoneNumber && `tel:${contact.phoneNumber}`) || "#"}
            fontSize="16px"
            color="black"
          >
            {(contact.phoneNumber &&
              `(${contact.phoneNumber.slice(0, 3)}) ${contact.phoneNumber.slice(
                3,
                6
              )}-${contact.phoneNumber.slice(6)}`) ||
              "(---) --- ----"}
          </TextLink>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 3" justifySelf="right">
          <Typography fontColor={midGrey}>Email</Typography>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 9" justifySelf="left">
          <TextLink
            href={(contact.email && `mailto:${contact.email}`) || "#"}
            fontSize="16px"
            color="black"
          >
            {contact.email || "---"}
          </TextLink>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 3" justifySelf="right">
          <Typography fontColor={midGrey}>Projects</Typography>
        </SimpleDiv>
        <SimpleDiv gridColumn="span 9" justifySelf="left">
          {contact.rentalProjects.map(project => (
            <TextLink
              key={project.id}
              as={Link}
              className="hover"
              to={{
                pathname: `/rentals/${project.project.id}`,
                state: { rentalId: project.project.id }
              }}
              margin="0 0 10px 0"
              fontSize="16px"
            >
              {project.project.title}
            </TextLink>
          ))}
        </SimpleDiv>
        {contact.notes && (
          <>
            <SimpleDiv gridColumn="span 3" justifySelf="right">
              <Typography fontColor={midGrey}>Notes</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 9" justifySelf="left">
              <Typography>{contact.notes}</Typography>
            </SimpleDiv>
          </>
        )}
      </GridWrapper>
    </>
  );
};
