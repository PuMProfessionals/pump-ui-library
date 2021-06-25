import React from 'react';
import styled from 'styled-components';

export const Button = ({
    /* eslint-disable react/prop-types */
    textColor,
    backgroundColor,
    text,
    ...props
}) => (
    <SButton textColor={textColor} backgroundColor={backgroundColor} {...props}>
        {text}
    </SButton>
);

const SButton = styled.button`
    ${({theme, textColor, backgroundColor }) => `
        display: flex;
        font-family: ${theme.font.josefin};
        font-size: ${theme.size.defaultLarger};
        border-radius: ${theme.radius.circular};
        padding: 0.75rem 1.5rem 0.5rem 1.5rem;
        border: none;
        align-items: center;
        transition: ${theme.transitions.cubicBezier};
        color: ${textColor};
        background-color: ${backgroundColor};
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