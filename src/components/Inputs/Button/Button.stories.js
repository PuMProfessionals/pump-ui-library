import React from 'react';
import { Button } from './Button';

export default {
    title: "Inputs/Button",
    component: Button,/*
    argTypes: {
        color: { control: 'color' },
        backgroundColor: { control: 'color' },
    },*/
}

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Learn More',
    /*color: "navy",
    backgroundColor: "yellow",*/
};