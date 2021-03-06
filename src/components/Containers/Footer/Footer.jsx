import React from "react";
import styled from "styled-components";

import PumpLogo from "../../../assets/pump-logo.svg";
import FacebookLogo from "../../../assets/fb.svg";
import InstagramLogo from "../../../assets/instagram.svg";
import { CONSTANTS, media } from "../../../utils";
import { Text } from "../../Texts";

export const Footer = ({ ...props }) => (
  <FooterContainer {...props}>
    <FirstColumn>
      <PumpImg src={PumpLogo} alt="Pump Logo" />
      <SText lineHeight="24px" style={{ padding: "20px 0 20px 0" }}>
        {CONSTANTS.footer.registered_charity_descr}
      </SText>
      <SText size="small">{CONSTANTS.footer.copyright}</SText>
    </FirstColumn>
    <SecondColumn>
      <JosefinNoHoverText bold size="defaultLarger" style={{ marginBottom: "20px" }}>
        {CONSTANTS.footer.navigation}
      </JosefinNoHoverText>
      {/* TODO: need to add links to appropriate pages */}
      {CONSTANTS.resources.map((resource) => (
        <JosefinText key={resource}>{resource}</JosefinText>
      ))}
    </SecondColumn>
    <ThirdColumn>
      <JosefinNoHoverText bold size="defaultLarger" style={{ marginBottom: "20px" }}>
        {CONSTANTS.pump}
      </JosefinNoHoverText>
      <a href={`mailto:${CONSTANTS.footer.email}`}>
        <Email>{CONSTANTS.email}</Email>
      </a>
      <JosefinNoHoverText>{CONSTANTS.footer.address}</JosefinNoHoverText>
      <LogoContainer>
        {/* REMOVE IN PROD:doc: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/*/}
        <a href={CONSTANTS.facebook} target="_blank" rel="noopener noreferrer">
          <Logo>
            <SocialMedia src={FacebookLogo} alt="Facebook Logo" />
          </Logo>
        </a>
        <a href={CONSTANTS.instagram} target="_blank" rel="noopener noreferrer">
          <Logo>
            <SocialMedia src={InstagramLogo} alt="Instagram Logo" />
          </Logo>
        </a>
      </LogoContainer>
    </ThirdColumn>
  </FooterContainer>
);

const FooterContainer = styled.div`
  ${({ theme }) => `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-family: ${theme.font.lato};
        font-size: ${theme.size.default};
        background-color: ${theme.colors.navy};
        color: ${theme.colors.text}
    `};

  ${media(
    "tablet",
    `
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 100px;
        `
  )};
  ${media(
    "mobile",
    `
        padding: 40px 50px;
        `
  )};
`;
const PumpImg = styled.img`
  width: 150px;
`;
const SText = styled(Text)`
  ${({ theme }) => `
        color: ${theme.colors.white};
    `}
  ${media(
    "mobile",
    `
        line-height: 1.3;
        `
  )};
`;
const JosefinNoHoverText = styled(SText)`
  ${({ theme }) => `
        font-family: ${theme.font.josefin};
    `};
`;
const JosefinText = styled(JosefinNoHoverText)`
  :hover {
    opacity: 70%;
    cursor: pointer;
  }
`;
const Email = styled(JosefinText)`
  text-decoration: underline;
  ${({ theme }) => `
        :hover {
            color: ${theme.colors.brightBlue};
        }
    `};
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Logo = styled.div`
  margin-right: 20px;
`;
const SocialMedia = styled.img`
  ${media(
    "mobile",
    `
        width: 70%;
        `
  )};
  :hover {
    opacity: 80%;
  }
`;
const FirstColumn = styled.div`
  padding: 130px 20px 100px 100px;
  ${media(
    "tablet",
    `
        padding: 20px 0 0 0;
        `
  )};
`;
const SecondColumn = styled.div`
  padding: 100px 20px 100px 100px;
  ${media(
    "tablet",
    `
        padding: 0;
        `
  )};
`;
const ThirdColumn = styled.div`
  padding: 100px 100px 100px 20px;
  ${media(
    "tablet",
    `
        padding: 0 0 20px 0;
        `
  )};
`;
