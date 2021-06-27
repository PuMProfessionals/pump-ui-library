import React from "react";
import { Navbar } from "./Navbar";
import { baseTheme } from "../../../theme";

export default {
  title: "Containers/Navbar",
  component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    backgroundColor: baseTheme.colors.greyBlue,
    fontColor: baseTheme.colors.white,
};
