import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { Button } from "../../Inputs";
import Open from "../../../assets/open-hamburger.svg";
import Close from "../../../assets/close-hamburger.svg";
import PumpLogo from "../../../assets/pump-logo.svg";
import { baseTheme } from "../../../theme";
import { CONSTANTS, media } from "../../../utils";

const START_INDEX = 0;
const ONE_LESS_THAN_SIZE = 5;
const DONATE = CONSTANTS.resources[ONE_LESS_THAN_SIZE];

export const Navbar = ({
  backgroundColor = baseTheme.colors.greyBlue,
  fontColor = baseTheme.colors.white,
  ...props
}) => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClick = () => setIsHidden(!isHidden);
  return (
    <NavbarContainer
      backgroundColor={backgroundColor}
      fontColor={fontColor}
      {...props}
    >
      <LogoContainer onClick={handleClick}>
        {/* TODO: CLICK IS TO HOME PAGE*/}
        <PumpImg src={PumpLogo} alt="Pump Logo" />
        {!isHidden && <Icon src={Open} alt="Hamburgeer" />}
        {!!isHidden && <Icon src={Close} alt="Cross" />}
      </LogoContainer>
      <Container isHidden={isHidden}>
        <ResourcesContainer>
          {CONSTANTS.resources
            .slice(START_INDEX, ONE_LESS_THAN_SIZE)
            .map((resource) => (
              <Resource key={resource} fontColor={fontColor}>
                {resource}
              </Resource>
            ))}
          <SButton>{DONATE}</SButton>
        </ResourcesContainer>
      </Container>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  ${({ theme }) => `
          font-family: ${theme.font.josefin};
          font-size: ${theme.size.default};
          padding: 2rem 4.5rem;
          display: flex;
          justify-content: space-between;
      `};
  ${(props) => `
        background-color: ${props.backgroundColor};
        color: ${props.fontColor};
    `};
  ${media(
    "tablet",
    `
          flex-direction: column;
          `
  )};
  ${media(
    "mobile",
    `
        padding: 1rem 2rem;
        `
  )}
`;
const LogoContainer = styled.div`
  ${media(
    "tablet",
    `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding-bottom: 20px;
            `
  )};
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  ${media(
    "tablet",
    `
          flex-direction: column;
          align-items: flex-start;
          `
  )};
  // props does not work within media function
  @media only screen and (max-width: 900px) {
    display: ${(props) => (props.isHidden ? "flex" : "none")};
  }
`;
const PumpImg = styled.img`
  width: 80px;
  padding-top: 15px;
  :hover {
    cursor: pointer;
  }
`;
const ResourcesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  ${media(
    "tablet",
    `
          flex-direction: column;
          `
  )};
`;
const Resource = styled(Text)`
  ${({ theme }) => `
        padding: 0 20px;

        :hover {
            cursor: pointer;
            color: ${theme.colors.yellow};
        }
    `};
  ${media(
    "tablet",
    `
          padding: 0;
          `
  )};
  color: ${(props) => props.fontColor};
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  display: none;
  ${media(
    "tablet",
    `
          display: flex;
          cursor: pointer;
          margin-top: 10px;
          opacity: 1;
          :hover {
            opacity: 0.8;
          }
          `
  )};
`;
const SButton = styled(Button)`
  margin-left: "10px";
  ${media(
    "tablet",
    `
          margin-top: 10px;
          margin-bottom: 20px;
          margin-left: 0;
          `
  )};
`;

Navbar.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  isHidden: PropTypes.bool,
};
