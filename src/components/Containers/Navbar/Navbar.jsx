import React, { useState } from "react";
import styled from "styled-components";
import { ReorderThree } from "@styled-icons/ionicons-outline/ReorderThree";
import { Cross } from "@styled-icons/entypo/Cross";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { Button } from "../../Inputs";
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
        {!isHidden && <Icon as={ReorderThree} />}
        {!!isHidden && <Icon as={Cross} />}
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
          <SButton style={{ marginLeft: "10px" }}>{DONATE}</SButton>
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
    ${props => `
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
    color: ${props => props.fontColor};
`;
const Icon = styled.svg`
  width: 70px;
  height: 60px;
  opacity: 0.8;
  display: none;
  ${media(
    "tablet",
    `
          display: flex;
          cursor: pointer;
          opacity: 1;
          `
  )};
`;
const SButton = styled(Button)`
  ${media(
    "tablet",
    `
          margin-top: 10px;
          margin-bottom: 20px;
          `
  )};
`;

Navbar.propTypes = {
  backgroundColor: PropTypes.string,
  fontColor: PropTypes.string,
  isHidden: PropTypes.bool,
};
