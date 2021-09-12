import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'antd';

const Amount = ({value, precision, currency, title}) => {
    return (
        <Statistic value={value} precision={precision} prefix={currency} title={title}/>
    );
}

export default Amount;

Amount.propTypes = {
    value: PropTypes.number,
    currency: PropTypes.string,
    precision: PropTypes.number,
    title: PropTypes.string
}

Amount.defaultProps = {
    value: 0,
    currency: '$',
    precision: 2,
    title: ''
}

