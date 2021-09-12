import React from 'react';
import PropTypes from 'prop-types';
import TransactionsSummary from '../TransactionsSummary/TransactionsSummary';
import Amount from '../Amount/Amount';
import { ImArrowDown } from "react-icons/im";
import './Income.css';

const Income = ({value, precision, currency}) => {
    const icon = <ImArrowDown fontSize={20} color="#15a86a" />;
    const amount = <Amount title="Income" value={value} precision={precision} currency={currency} />
    return (
        <div class='income'>
            <TransactionsSummary icon={icon} amount={amount}/>
        </div>
    )
}

export default Income;

Income.propTypes = {
    value: PropTypes.number,
    currency: PropTypes.string,
    precision: PropTypes.number,
}

Income.defaultProps = {
    value: 0,
    currency: '$',
    precision: 2,
}