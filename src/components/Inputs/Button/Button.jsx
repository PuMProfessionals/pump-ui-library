import React from 'react';
import styled from 'styled-components';
import PropTypes from "prop-types";

export const Button = ({
    color,
    backgroundColor,
    children,
    ...props
}) => (
    <SButton color={color} backgroundColor={backgroundColor} {...props}>
        {children}
    </SButton>
);

const SButton = styled.button`
    ${({theme, color="navy", backgroundColor="yellow" }) => `
        display: flex;
        font-family: ${theme.font.josefin};
        font-size: ${theme.size.defaultLarger};
        border-radius: ${theme.radius.circular};
        padding: 0.75rem 1.5rem 0.5rem 1.5rem;
        border: none;
        align-items: center;
        transition: ${theme.transitions.cubicBezier};
        color: ${theme.colors[color] || color};
        background-color: ${theme.colors[backgroundColor] || backgroundColor};
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
    children: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  };
  