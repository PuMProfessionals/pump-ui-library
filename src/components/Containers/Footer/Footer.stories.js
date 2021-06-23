import React from 'react';
import { Footer } from './Footer';
import styled from 'styled-components';

export default {
  title: 'Containers/Footer',
  component: Footer
};

const Template = (args) => (
    <Footer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
    lineHeight: 1.25,
    bold: true,
    size: 'h1'
};
