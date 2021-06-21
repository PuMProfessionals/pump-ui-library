import React from 'react';
import { LegacyButton } from './LegacyButton';
import { ArrowRightS } from '@styled-icons/remix-line/ArrowRightS';

export default {
  title: 'Inputs/LegacyButton',
  component: LegacyButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <LegacyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Our Work',
  icon: ArrowRightS
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Our Partners',
  isInverted: false,
  icon: ArrowRightS
};