import React from 'react';
import TotalBalance from './TotalBalance';

export default {
    title: 'TotalBalance',
    component: TotalBalance
}

const Template = (args) => <TotalBalance {...args} />

export const Default = Template.bind({});

export const Negative = Template.bind({});
Negative.args = {
    value: -1000
}

export const Positive = Template.bind({});
Positive.args = {
    value: 2000,
    symbol: '€' 
}