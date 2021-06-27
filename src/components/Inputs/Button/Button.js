import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export const Button = ({
  isInverted = true,
  /* eslint-disable react/prop-types */
  icon, // Styled Icon type
  children,
  ...props
}) => (
  <SLegacyButton isInverted={isInverted} {...props}>
    {children}
    {!!icon && <Icon as={icon} />}
  </SLegacyButton>
);

const SLegacyButton = styled.button`
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
const Icon = styled.svg`
  width: 40px;
  height: 40px;
  margin: 0 0 4px 10px;
`;

Button.propTypes = {
  isInverted: PropTypes.bool,
  icon: PropTypes.element,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
    .isRequired,
};
