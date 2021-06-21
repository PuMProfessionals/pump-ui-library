import React from 'react';
import styled from 'styled-components';

export const LegacyButton = ({
    isInverted = true,
    icon,
    children,
    ...props
})=> (
    <SLegacyButton isInverted={isInverted} {...props}> 
        {children.toUpperCase()}
        {!!icon && <Icon as={icon} />}
    </SLegacyButton>
);

const SLegacyButton = styled.button`
    ${({ theme, isInverted }) => `
        color: ${isInverted ? `${theme.colors.text}` : `${theme.colors.navy}`};
        border: 1px solid ${theme.colors.navy};
        font-size: ${theme.size.defaultLarger};
        font-family: ${theme.font.header};
        text-decoration: none;
        cursor: pointer;
        padding: 0.75rem 2rem 0.5rem 2.5rem;
        display: flex;
        align-items: center;
        font-weight: bold;
        border-radius: ${theme.radius.border};
        transition: ${theme.transitions.cubicBezier};
        background-color: ${isInverted ? `${theme.colors.navy}` : `${theme.colors.input}`};
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