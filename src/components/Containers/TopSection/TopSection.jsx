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
  align-items: center;
  ${media(
    700,
    `
        flex-direction: column-reverse;
        `
  )};
  ${media(
    800,
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
    1200,
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
  ${media(
    1200,
    `
        max-width: 400px;
        `
  )};
`;

const FirstColumn = styled.div`
  flex: 0 0 35%;
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
    1200,
    `
        padding-left: 5em;
        `
  )};
  ${media(
    "tablet",
    `
        padding-left: 2em;
        `
  )};
  ${media(
    700,
    `
        padding: 0 0 0 0;
        `
  )};
`;
