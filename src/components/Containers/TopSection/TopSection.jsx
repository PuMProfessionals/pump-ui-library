import React from "react";
import styled from "styled-components";

import SideGraphic from "../../../assets/top-section-graphic.svg";
import { media } from "../../../utils";
import { Text } from "../../Texts";
import { Button } from "../../Inputs";

export const TopSection = ({ ...props }) => (
  <MainContainer {...props}>
    <MobileGraphic>
      <Graphic src={SideGraphic} alt="Graphic" />
    </MobileGraphic>
    <FirstColumn>
      <JosefinTitle size="xxlarge" bold="true">
        Prospective Medical Professionals
      </JosefinTitle>
      <SText size="default">
        A registered charity dedicated to connecting aspiring students to health
        sciences opportunities
      </SText>
      <SButton>
        <ButtonText size="default" bold="true">
          DONATE
        </ButtonText>
      </SButton>
    </FirstColumn>
    <SecondColumn>
      <Graphic src={SideGraphic} alt="Graphic" />
    </SecondColumn>
  </MainContainer>
);

const MainContainer = styled.div`
  display: flex;
  margin: 5em;
  ${media(
    "mobile",
    `
        margin: 1em;
        flex-direction: column;
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
`;

const ButtonText = styled(SText)`
  margin: 0 0 0 0;
`;

const Graphic = styled.img`
  width: 100%;
  height: auto;
`;

const SButton = styled(Button)``;

const FirstColumn = styled.div`
  flex: 0 0 35%;
  ${media(
    "mobile",
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
        flex: 0 0 0;
        display: none;
        `
  )};
`;

const MobileGraphic = styled(FirstColumn)`
  display: none;
  width: 100%;
  ${media(
    "mobile",
    `
          display: block;
          `
  )};
`;
