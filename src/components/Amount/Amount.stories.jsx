import React from 'react';
import Amount from './Amount';

export default {
    title: 'Amount',
    component: Amount
}

const Template = (args) => <Amount {...args}/>

export const Default = Template.bind({});

export const Negative = Template.bind({});
Negative.args = {
    value: -1000
}

export const WithTitle = Template.bind({});
WithTitle.args = {
    title: 'Title'
}