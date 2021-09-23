import React from 'react';
import Date from './Date';

export default {
    title: 'Date',
    component: Date
}

const Template = (args) => <Date {...args}/>

export const Default = Template.bind({});

export const Invalid = Template.bind({});
Invalid.args = {
    value: 'test'
}

export const WithoutDay = Template.bind({});
WithoutDay.args = {
    value: '16/09/2021'
}

export const WithDay = Template.bind({});
WithDay.args = {
    value: '16/09/2021',
    displayDay: true
}

export const DifferentFormat = Template.bind({});
DifferentFormat.args = {
    value: '16/09/2021',
    format: 'y/m/d'
}