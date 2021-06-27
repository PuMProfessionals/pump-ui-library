import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = ({
  isInverted = true,
  children,
  ...props
}) => (
  <SButton isInverted={isInverted} {...props}>
    {children}
  </SButton>
);

const SButton = styled.button`
  ${({ theme, isInverted }) => `
        color: ${theme.colors.navy};
        border: 1px solid ${theme.colors.yellow};
        font-size: ${theme.size.default};
        font-family: ${theme.font.josefin};
        text-decoration: none;
        cursor: pointer;
        padding: 0.75rem 1.5rem 0.75rem 1.5rem;
        display: flex;
        align-items: center;
        text-align: center;
        border-radius: ${theme.radius.button};
        transition: ${theme.transitions.cubicBezier};
        background-color: ${
          isInverted ? `${theme.colors.yellow}` : `${theme.colors.white}`
        };
        &:focus,
        &:active,
        &:hover {
            transform: scale(0.9);
            outline: none;
        }
        &:after {
            display: none !important;
        }
    `};
`;

Button.propTypes = {
  isInverted: PropTypes.bool,
  icon: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};
