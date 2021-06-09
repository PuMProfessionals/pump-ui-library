import React from 'react';
import { Input } from './Input';

export default {
  title: 'Inputs/Input',
  component: Input,
};

const Template = (args) => <Input style={{ width: '300px' }} {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Enter your thoughts here',
};