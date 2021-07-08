import React from "react";
import { TopSection } from "./TopSection";

export default {
  title: "Containers/TopSection",
  component: TopSection,
};

const Template = (args) => <TopSection {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
