import React from "react";
import { Text } from "./Text";
import styled from "styled-components";

export default {
  title: "Texts/Text",
  component: Text,
};

const Template = (args) => <SText {...args}> Title </SText>;

export const Primary = Template.bind({});
Primary.args = {
  lineHeight: 1.25,
  bold: true,
  size: "h1",
};

const SText = styled(Text)`
  padding: 0 30px;
`;
