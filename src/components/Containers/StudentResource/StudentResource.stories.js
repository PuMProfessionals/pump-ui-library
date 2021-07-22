import React from "react";
import { StudentResource } from "./StudentResource";
import PlaceholderGraphic from "../../../assets/introductions-mdx/code-brackets.svg";

export default {
  title: "Containers/StudentResource",
  component: StudentResource,
};

const Template = (args) => <StudentResource {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleText: "PuMP Direct",
  descriptionText:
    "Browse and filter our database of local opportunities in healthcare",
  graphic: PlaceholderGraphic,
};
