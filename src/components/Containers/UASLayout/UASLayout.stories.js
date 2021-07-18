import React from "react";
import { UASLayout } from "./UASLayout";
import PlaceholderGraphic from "../../../assets/introductions-mdx/code-brackets.svg";

export default {
  title: "Containers/UASLayout",
  component: UASLayout,
};

const Template = (args) => <UASLayout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  titleText: "What is UAS?",
  descriptionText: `The University Admissions Server is a Discord community for
  high and undergraduate students to learn more about diverse university
  programs. Our goal is to create an infromation hub to answer student questions
   on admission requirements, program curriculum, student life, extracurricular
   opportunities, and more.`,
  graphic: PlaceholderGraphic,
};
