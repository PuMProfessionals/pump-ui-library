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
  graphicLeft,
  ...props
}) => (
  <StudentResourceSection graphicLeft={graphicLeft} {...props}>
    <Graphic src={graphic} />
    <InfoSection graphicLeft={graphicLeft}>
      <Title>{titleText}</Title>
      <Text>{descriptionText}</Text>
      <ButtonSection graphicLeft={graphicLeft}>
        {buttons.map((button) => (
          <a key={button.text} href={button.link}>
            <SButton backgroundColor={button.color}>{button.text}</SButton>
          </a>
        ))}
      </ButtonSection>
    </InfoSection>
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
  /* TODO: width and height as props on web repo */
  width: 35%;
  height: 300px;
  border: 2px solid black; /* TODO: curved border? */
`;

const StudentResourceSection = styled.div`
  display: flex;
  ${({ graphicLeft }) => `
    flex-direction: ${graphicLeft ? "row" : "row-reverse"}
  `};
  align-items: center;
  justify-content: center;
  /* TODO: flex column on mobile */
`;

const InfoSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  ${({ graphicLeft }) => `
    text-align: ${graphicLeft ? "left" : "right"};
    ${graphicLeft ? "margin-left: 8%" : "margin-right: 8%;"}
  `};
  /* TODO: no margin, center text on mobile */
  /* TODO: change text color based on background */
`;

const ButtonSection = styled.div`
  display: flex;
  ${({ graphicLeft }) => `
    justify-content: ${graphicLeft ? "left" : "right"}
  `};
  /* TODO: center buttons on mobile */
  flex-flow: row wrap;
`;

const SButton = styled(Button)`
  margin: 0.25rem;
`;

StudentResource.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  buttons: PropTypes.Object,
  graphic: PropTypes.string,
  graphicLeft: PropTypes.boolean,
};
