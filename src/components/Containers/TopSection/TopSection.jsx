import React from "react";
import styled from "styled-components";

import TitleGraphic from "../../../assets/home/top-section-graphic.svg";
import { media } from "../../../utils";
import { Text } from "../../Texts";
import { Button } from "../../Inputs";

export const TopSection = ({ ...props }) => (
  <MainContainer {...props}>
    <FirstColumn>
      <JosefinTitle size="4.5em" bold="true">
        Prospective Medical Professionals
      </JosefinTitle>
      <SText size="default">
        A registered charity dedicated to connecting aspiring students to health
        sciences opportunities
      </SText>
      <Button>
        <ButtonText size="default" bold="true">
          DONATE
        </ButtonText>
      </Button>
    </FirstColumn>
    <SecondColumn>
      <Graphic
        src={TitleGraphic}
        alt="Title graphic - person with book, stethoscope, pills and syringe"
      />
    </SecondColumn>
  </MainContainer>
);

const MainContainer = styled.div`
  display: flex;
  margin: 5em;
  flex-wrap: nowrap;
  flex-direction: row;
  ${media(
    "mobile",
    `
        margin: 1em;
        flex-direction: column-reverse;
        `
  )};
  ${media(
    "tablet",
    `
        margin: 1em;
        `
  )};
`;

const SText = styled(Text)`
  ${({ theme }) => `
    font-family: ${theme.font.lato};
    color: ${theme.colors.navy};
    margin-top: 0;
  `};
  ${media(
    "mobile",
    `
        line-height: 1.3;
        `
  )};
  ${media(
    "tablet",
    `
        line-height: 1.3;
        `
  )};
`;

const JosefinTitle = styled(SText)`
  ${({ theme }) => `
    font-family: ${theme.font.josefin};
    margin: 1em 0 0 0;
  `};
  ${media(
    "mobile",
    `
        font-size: 2.5rem;
        `
  )};
  ${media(
    "tablet",
    `
        font-size: 2.5rem;
        `
  )};
  ${media(
    "laptop",
    `
        font-size: 2.5rem;
        `
  )};
`;

const ButtonText = styled(SText)`
  margin: 0 0 0 0;
`;

const Graphic = styled.img`
  width: 100%;
  height: auto;
`;

const FirstColumn = styled.div`
  flex: 0 0 35%;
  ${media(
    "mobile",
    `
        flex: 1 0 0;
        `
  )};
  ${media(
    "tablet",
    `
        flex: 1 0 0;
        `
  )};
`;

const SecondColumn = styled.div`
  padding-left: 10em;
  flex: 1;
  ${media(
    "mobile",
    `
        padding-left: 0;
        `
  )};
  ${media(
    "tablet",
    `
        padding-left: 0;
        `
  )};
`;
