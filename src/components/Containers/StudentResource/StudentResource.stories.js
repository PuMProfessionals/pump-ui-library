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
  buttons: [
    {
      color: "yellow",
      text: "Browse opportunities",
      link: "http://example.org/",
    },
    {
      color: "yellow",
      text: "Join our community of 800+ Students",
      link: "http://example.org/",
    },
    {
      color: "white",
      text: "Learn more",
      link: "http://example.org/",
    },
  ],
  graphic: PlaceholderGraphic,
  isGraphicLeft: true,
};
