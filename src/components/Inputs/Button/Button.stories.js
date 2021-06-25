import React from 'react';
import { Button } from './Button';
import { baseTheme } from '../../../theme/theme';

export default {
    title: "Inputs/Button",
    component: Button,
    argTypes: {
        textColor: { control: 'color' },
        backgroundColor: { control: 'color' },
    },
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    text: 'Learn More',
    textColor: baseTheme.colors.navy,
    backgroundColor: baseTheme.colors.yellow,
};