import React from "react";
import { Footer } from "./Footer";

export default {
  title: "Containers/Footer",
  component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
