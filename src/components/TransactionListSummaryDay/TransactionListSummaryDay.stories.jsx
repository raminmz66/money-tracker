import React from 'react';
import TransactionListSummaryDay from './TransactionListSummaryDay';

export default {
    title: 'TransactionListSummaryDay',
    component: TransactionListSummaryDay
};

const Template = args => <TransactionListSummaryDay {...args}/>

export const Default = Template.bind({});

export const Positive = Template.bind({});
Positive.args = {
    date: '03/11/2021',
    amount: 1000,
};