import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { baseTheme } from "../../../theme";
import { media } from "../../../utils";

export const UASLayout = ({ titleText, graphic, descriptionText, ...props }) => (
  <div {...props}>
    <TitleSection>
      <Title size={baseTheme.size.h2} bold="true">
        {titleText}
      </Title>
    </TitleSection>
    <InfoSection>
      <Graphic src={graphic} />
      <Description>{descriptionText}</Description>
    </InfoSection>
  </div>
);

const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.black};
  `};
`;

const Description = styled(Text)`
  flex: 1;
`;

const Graphic = styled.img`
  width: 300px;
  height: 240px;
  border: 2px solid black;
  margin-right: 5%;
  ${media(
    700,
    `
        margin: 0px;
    `
  )}
`;

const TitleSection = styled.div`
  margin: 5% 5% 0%;
`;

const InfoSection = styled.div`
  display: flex;
  padding-left: 5%;
  padding-right: 5%;
  align: start;
  ${media(
    700,
    `
        flex-direction: column;
        align-items: center;
    `
  )}
`;

UASLayout.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  graphic: PropTypes.string,
};
