import React from 'react';
import { Button } from './Button';
import { ArrowRightS } from '@styled-icons/remix-line/ArrowRightS';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

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