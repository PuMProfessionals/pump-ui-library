import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { Button } from "../../Inputs";
import { media } from "../../../utils";

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
  height: auto;
  border: 2px solid black; /* TODO: curved border? */
  ${media(
    "800",
    `
      width: 70%;
    `
  )}
`;

const StudentResourceSection = styled.div`
  display: flex;
  ${({ graphicLeft }) => `
    flex-direction: ${graphicLeft ? "row" : "row-reverse"}
  `};
  align-items: center;
  justify-content: center;
  ${media(
    800,
    `
      flex-direction: column;
    `
  )}
`;

const InfoSection = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  ${({ graphicLeft }) => `
    text-align: ${graphicLeft ? "left" : "right"};
    ${graphicLeft ? "margin-left: 8%" : "margin-right: 8%;"}
  `};
  ${media(
    800,
    `
      text-align: center;
      margin: 5% 0 0;
      width: 85%;
    `
  )}
  /* TODO: change text color based on background */
`;

const ButtonSection = styled.div`
  display: flex;
  ${({ graphicLeft }) => `
    justify-content: ${graphicLeft ? "left" : "right"}
  `};
  flex-flow: row wrap;
  ${media(
    800,
    `
      justify-content: center;
    `
  )}
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
