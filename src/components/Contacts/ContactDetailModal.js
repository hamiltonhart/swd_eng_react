import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from "@apollo/react-hooks";
import { CONTACT_QUERY } from "../../gql";

import { PageHeading, Typography, TextLink } from "../../styled/typography";
import { midGrey } from "../../styled/defaults";
import { GridWrapper, SimpleDiv } from "../../styled/containers";

export const ContactDetailModal = ({ contactId }) => {
  const { data, loading, error } = useQuery(CONTACT_QUERY, {
    variables: { id: contactId }
  });
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error.message}</h1>}
      {data && (
        <>
          <PageHeading>{`${data.contact.firstName} ${data.contact.lastName}`}</PageHeading>
          <GridWrapper maxWidth="366px" margin="29px 0" rowGap="12px">
            <SimpleDiv gridColumn="span 3" justifySelf="right">
              <Typography fontColor={midGrey}>Company</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 9" justifySelf="left">
              <Typography>{data.contact.company || "---"}</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 3" justifySelf="right">
              <Typography fontColor={midGrey}>Title</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 9" justifySelf="left">
              <Typography>{data.contact.title || "---"}</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 3" justifySelf="right">
              <Typography fontColor={midGrey}>Phone</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 9" justifySelf="left">
              <TextLink
                href={
                  (data.contact.phoneNumber &&
                    `tel:${data.contact.phoneNumber}`) ||
                  "#"
                }
                fontSize="16px"
                color="black"
              >
                {(data.contact.phoneNumber &&
                  `(${data.contact.phoneNumber.slice(
                    0,
                    3
                  )}) ${data.contact.phoneNumber.slice(
                    3,
                    6
                  )}-${data.contact.phoneNumber.slice(6)}`) ||
                  "(---) --- ----"}
              </TextLink>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 3" justifySelf="right">
              <Typography fontColor={midGrey}>Email</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 9" justifySelf="left">
              <TextLink
                href={
                  (data.contact.email && `mailto:${data.contact.email}`) || "#"
                }
                fontSize="16px"
                color="black"
              >
                {data.contact.email || "---"}
              </TextLink>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 3" justifySelf="right">
              <Typography fontColor={midGrey}>Projects</Typography>
            </SimpleDiv>
            <SimpleDiv gridColumn="span 9" justifySelf="left">
              {data.contact.rentalProjects.map(project => (
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
            {data.contact.notes && (
              <>
                <SimpleDiv gridColumn="span 3" justifySelf="right">
                  <Typography fontColor={midGrey}>Notes</Typography>
                </SimpleDiv>
                <SimpleDiv gridColumn="span 9" justifySelf="left">
                  <Typography>{data.contact.notes}</Typography>
                </SimpleDiv>
              </>
            )}
          </GridWrapper>
        </>
      )}
    </>
  );
};
