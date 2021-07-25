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
      link: "https://google.com",
    },
    {
      color: "yellow",
      text: "Join our community of 800+ Students",
      link: "https://google.com",
    },
    {
      color: "yellow",
      text: "Learn more",
      link: "https://google.com",
    },
  ],
  graphic: PlaceholderGraphic,
};
