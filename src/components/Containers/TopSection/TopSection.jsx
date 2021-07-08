import React from "react";
import styled from "styled-components";

import SideGraphic from "../../../assets/top-section-graphic.svg";
//import { media } from "../../../utils";
import { Text } from "../../Texts";
import { Button } from "../../Inputs";

export const TopSection = ({ ...props }) => (
    <MainContainer {...props}>
        <FirstColumn>
              <JosefinTitle size="xxlarge" bold="true" >Prospective Medical Professionals</JosefinTitle>
              <SText size="default" >A registered charity dedicated to connecting aspiring students to health sciences opportunities</SText>
              <SButton>DONATE</SButton>
        </FirstColumn>
        <SecondColumn>
            <Graphic src={SideGraphic} alt="Graphic" />
        </SecondColumn>
    </MainContainer>
);

const MainContainer = styled.div`
  ${({ theme }) => `
        display: flex;
        grid-template-columns: repeat(3, 1fr);
        margin: 5em;
        font-family: ${theme.font.lato};
        font-size: ${theme.size.default};
        {/*background-color: ${theme.colors.navy};*/}
        color: ${theme.colors.navy};
    `};
`;

const SText = styled(Text)`
  ${({ theme }) => `
        color: ${theme.colors.navy};
        margin-top: 0;
    `};
`;

const JosefinTitle = styled(SText)`
  ${({ theme }) => `
        font-family: ${theme.font.josefin};
        margin: 2em 0 0 0;
    `};
`;

const Graphic = styled.img`
  {/*width: 300px;*/}
  width: 100%;
  height: auto;
`;

const SButton = styled(Button)`
`;

const FirstColumn = styled.div`
  {/*
  grid-column: 1 / 3;
  padding: 130px 20px 100px 100px;
  */}
  flex: 0 0 40%;
`;

const SecondColumn = styled.div`
  {/*
  padding: 100px 100px 100px 100px;
  width: 50%;
  max-width: 50%;
  */}
  padding-left: 10em;
  flex: 1;
`;