import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { baseTheme } from "../../../theme";
import { media } from "../../../utils";

export const Navbar = ({ 
    backgroundColor = baseTheme.colors.white,
    fontColor = baseTheme.colors.navy,
    ...props 
}) => (
  <NavbarContainer backgroundColor={backgroundColor} fontColor={fontColor} {...props}>
      hello
  </NavbarContainer>
);

const NavbarContainer = styled.div`
  ${({ theme, backgroundColor, fontColor }) => `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-family: ${theme.font.lato};
        font-size: ${theme.size.default};
        background-color: ${backgroundColor};
        color: ${fontColor};
    `};

  ${media(
    "tablet",
    `
        display: flex;
        flex-direction: column;
        justify-contents: center;
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

Navbar.propTypes = {
    backgroundColor: PropTypes.string,
    fontColor: PropTypes.string,
}
