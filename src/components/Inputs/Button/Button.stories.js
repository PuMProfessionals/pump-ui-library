import React from "react";
import { Button } from "./Button";

export default {
  title: "Inputs/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Join our Community of 800+ Students",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Learn More",
  isInverted: false
};
