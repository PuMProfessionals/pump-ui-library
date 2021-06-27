import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { Button } from "../../Inputs";
import PumpLogo from "../../../assets/pump-logo.svg";
import { baseTheme } from "../../../theme";
import { CONSTANTS, media } from "../../../utils";

const START_INDEX = 0
const ONE_LESS_THAN_SIZE = 5
const DONATE = CONSTANTS.resources[ONE_LESS_THAN_SIZE];

export const Navbar = ({ 
    backgroundColor = baseTheme.colors.greyBlue,
    fontColor = baseTheme.colors.white,
    ...props 
}) => (
  <NavbarContainer backgroundColor={backgroundColor} fontColor={fontColor} {...props}>
      <Container>
        {/* TODO: CLICK IS TO HOME PAGE*/}
        <PumpImg src={PumpLogo} alt="Pump Logo" />
      </Container>
      <Container>
        <ResourcesContainer>
          {CONSTANTS.resources.slice(START_INDEX, ONE_LESS_THAN_SIZE).map(resource => (
              <Resource key={resource} fontColor={fontColor}>{resource}</Resource>
          ))}
          <Button style={{ marginLeft: "10px" }}>{DONATE}</Button>
        </ResourcesContainer>
      </Container>
  </NavbarContainer>
);

const NavbarContainer = styled.div`
  ${({ theme, backgroundColor, fontColor }) => `
        font-family: ${theme.font.josefin};
        font-size: ${theme.size.default};
        background-color: ${backgroundColor};
        color: ${fontColor};
        padding: 2rem 4.5rem;
        display: flex;
        justify-content: space-between;
    `};
  ${media(
    "tablet",
    `
        flex-direction: column;
        color: black;
        `
  )};
`;
const Container = styled.div`
    display: flex;
    align-items: center;
`;
const PumpImg = styled.img`
    width: 80px;
    :hover {
      cursor: pointer;
    }
`;
const ResourcesContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`;
const Resource = styled(Text)`
  ${({ theme, fontColor }) => `
      color: ${fontColor};
      padding: 0 20px;

      :hover {
          cursor: pointer;
          color: ${theme.colors.yellow};
      }
  `};
`;

Navbar.propTypes = {
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
}
