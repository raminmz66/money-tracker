import React from 'react';
import Expense from './Expense';

export default {
    title: 'Expense',
    component: Expense
}

const Template = (args) => <Expense {...args}/>;

export const Default = Template.bind({});
