import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { Text } from "../../Texts";
import { baseTheme } from "../../../theme";

export const UASLayout = ({ ...props }) => (
  <div>
      <Title size={baseTheme.size.h2} bold="true">
        {props.titleText}
      </Title>
      <Graphic src={props.graphic} />
      <Text>{props.descriptionText}</Text>
  </div>
);

const Title = styled(Text)`
  ${({ theme }) => `
      font-family: ${theme.font.josefin};
      color: ${theme.colors.black};
  `};
`;

const Graphic = styled.img`
  width: 100%;
  height: auto;
  border-width: 2px;
  border-style: solid;
  border-color: black;
`;

UASLayout.propTypes = {
  titleText: PropTypes.string,
  descriptionText: PropTypes.string,
  graphic: PropTypes.string
};
