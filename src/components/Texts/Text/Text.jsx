import React from 'react';
import styled from 'styled-components';

export const Text = ({
    children,
    color = 'navy',
    size = 'default',
    lineHeight = '1.25',
    padding,
    ...props
}) => (
    <SText size={size} color={color} lineHeight={lineHeight} {...props}>
        {children}
    </SText>
);

const SText = styled.p`
    ${({ theme, bold, lineHeight, color = 'text', size = 'default' }) => `
        color: ${theme.colors[color] || color};
        font-size: ${theme.size[size] || size};
        line-height: ${lineHeight || 1.25};
        font-weight: ${bold ? 'bold' : 'normal'};
    `}
`;
