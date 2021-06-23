import { constants } from 'memfs/lib/constants';
import React from 'react';
import styled from 'styled-components';

import PumpLogo from '../../../assets/pump-logo.svg';
import FacebookLogo from '../../../assets/fb.svg';
import InstagramLogo from '../../../assets/instagram.svg';
import { CONSTANTS } from '../../../utils/strings';
import { Text } from '../../Texts';

export const Footer = ({
    ...props
}) => (
    <FooterContainer {...props}>
        <div style={{ padding: "130px 20px 100px 100px" }}>
            <PumpImg src={PumpLogo} alt="Pump Logo"/>
            <SText lineHeight="24px" style={{ padding: "20px 0 20px 0" }}>
                {CONSTANTS.footer.registered_charity_descr}
            </SText>
            <SText size="small">
                {CONSTANTS.footer.copyright}
            </SText> 
        </div>
        <div style={{ padding: "100px 20px 100px 100px" }}>
            <JosefinText bold size="defaultLarger" style={{ marginBottom: '20px' }}>
                {CONSTANTS.footer.navigation}
            </JosefinText>
            {CONSTANTS.footer.resources.map(resource => (
                <JosefinText key={resource}>
                    {resource}
                </JosefinText>
            ))}
         </div>
        <div style={{ padding: "100px 100px 100px 20px" }}>
            <JosefinText bold size="defaultLarger" style={{ marginBottom: '20px' }}>
                {CONSTANTS.footer.pump}
            </JosefinText>
            {CONSTANTS.footer.contact_info.map(contact => (
                <JosefinText key={contact}>
                    {contact}
                </JosefinText>
            ))}
            <LogoContainer>
                <Logo>
                    <img src={FacebookLogo} alt="Facebook Logo" />
                </Logo>
                <Logo>
                    <img src={InstagramLogo} alt="Instagram Logo" />
                </Logo>
            </LogoContainer>
        </div>
    </FooterContainer>
);

const FooterContainer = styled.div`
    ${({ theme }) => `
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        font-family: ${theme.font.lato};
        font-size: ${theme.size.default};
        background-color: ${theme.colors.navy};
        color: ${theme.colors.text}
    `};
`;
const PumpImg = styled.img`
    width: 150px;
`;
const SText = styled(Text)`
    ${({ theme }) => `
        color: ${theme.colors.white};
    `}
`;
const JosefinText = styled(SText)`
    ${({ theme }) => `
        font-family: ${theme.font.josefin};
    `}
`;
const LogoContainer = styled.div`
    display: flex;
    flex-direction: row;
`;
const Logo = styled.div`
    margin-right: 20px;
`;
