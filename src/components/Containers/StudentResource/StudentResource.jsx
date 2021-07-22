import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
export const StudentResource = ({
  titleText,
  descriptionText,
  graphic,
  ...props
}) => (
  <StudentResourceSection {...props}>
    <InfoSection>
      <Title>{titleText}</Title>
      {/* TODO: Description */}
      {/* TODO: Button array (color, link, text) */}
      <Text>{descriptionText}</Text>
    </InfoSection>
    <Graphic src={graphic} />
  </StudentResourceSection>
);

const Title = styled.h2`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.black};
  `};
`;

const Graphic = styled.img`
  width: 550px; /* TODO: maybe width and height prop? */
  height: 350px;
  height: 350px;
  border: 2px solid black; /* TODO: curved border */
`;

const StudentResourceSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* TODO: flex column on mobile */
`;

const InfoSection = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%; /* TODO: ternary for image location, margin-left */
  /* TODO: change text color based on background */
`;

StudentResource.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  graphic: PropTypes.string,
};
