import React from 'react';
import EmptyTransactionList from './EmptyTransactionList';

export default {
    title: 'EmptyTransactionList',
    component: EmptyTransactionList
}

const Template = (args) => <EmptyTransactionList {...args}/>

export const Default = Template.bind({});