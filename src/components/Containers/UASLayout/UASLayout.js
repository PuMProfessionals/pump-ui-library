import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { baseTheme } from "../../../theme";
import { media } from "../../../utils";

export const UASLayout = ({ ...props }) => (
  <div>
    <TitleSection>
      <Title size={baseTheme.size.h2} bold="true">
        {props.titleText}
      </Title>
    </TitleSection>
    <InfoSection>
      <Graphic src={props.graphic} />
      <Description>{props.descriptionText}</Description>
    </InfoSection>
  </div>
);

const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.black};
  `};
  margin: 1rem 1rem;
`;

const Description = styled(Text)`
  flex: 1;
`;

const Graphic = styled.img`
  width: 300px;
  height: 240px;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  margin: 1rem 1rem;
  ${media(
    "tablet",
    `
    width: 90%;
    `
  )}
`;

const TitleSection = styled.div`
  width: 100%;
`;

const InfoSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  ${media(
    "tablet",
    `
        flex-direction: column;
        align-items: center;
        `
  )}
`;

UASLayout.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  graphic: PropTypes.string
};
