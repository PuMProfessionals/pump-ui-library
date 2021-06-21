import React from 'react';
import styled from 'styled-components';
import PumpLogo from '../../../assets/pump_logo.svg'

export const Footer = ({
    placeholder,
    ...props
}) => (
    <FooterContainer {...props}>
        <Column>
            <Logo as={PumpLogo} />
            <h1>Hello</h1> 
        </Column>
    </FooterContainer>
);

const FooterContainer = styled.div`
    ${({ theme }) => `
        font-size: ${theme.size.default};
        color: ${theme.colors.text}
        font-family: ${theme.font.body};
        padding: 20px;
    `};
`;
const Column = styled.div`
`;
const Logo = styled.svg`
    color: ${theme.colors.navy};
    margin: 0 0 4px 10px;
`;
