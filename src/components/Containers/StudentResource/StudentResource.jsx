import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { Button } from "../../Inputs";

export const StudentResource = ({
  titleText,
  descriptionText,
  buttons,
  graphic,
  ...props
}) => (
  <StudentResourceSection {...props}>
    <InfoSection>
      <Title>{titleText}</Title>
      <Text>{descriptionText}</Text>
      <ButtonSection>
        {buttons.map(button => (
          <SButton key={button.text} backgroundColor={button.color}>
            {button.text}
          </SButton>
        ))}
      </ButtonSection>
    </InfoSection>
    <Graphic src={graphic} />
  </StudentResourceSection>
);

const Title = styled.h2`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.black};
  `};
  margin: 0;
`;

const Graphic = styled.img`
  width: 550px; /* TODO: maybe width and height prop? */
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
  text-align: right; /* TODO: change on image location, center on mobile */
  margin-right: 5%; /* TODO: ternary for image location, margin-left */
  /* TODO: change text color based on background */
`;

const ButtonSection = styled.div`
  display: flex;
  justify-content: right;
  flex-flow: row wrap;
`;

const SButton = styled(Button)`
  margin: 0.25rem;
`;

StudentResource.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  buttons: PropTypes.Object,
  graphic: PropTypes.string
};
