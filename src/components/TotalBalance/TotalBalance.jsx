import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'antd';
import './TotalBalance.css';

const TotalBalance = ({value = 0, precision = 2, symbol = '$'}) => {
    return (
        <div class="total-balance">
            <Statistic title="Total Balance" value={value} precision={precision} prefix={symbol}></Statistic>
        </div>
    );
}

export default TotalBalance;

TotalBalance.propTypes = {
    value: PropTypes.number,
    precision: PropTypes.number,
    symbol: PropTypes.string
}