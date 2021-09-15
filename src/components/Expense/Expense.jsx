import React from 'react';
import PropTypes from 'prop-types';
import TransactionsSummary from '../TransactionsSummary/TransactionsSummary';
import Amount from '../Amount/Amount';
import { ImArrowUp } from "react-icons/im";
import styles from './Expense.module.css';

const Expense = ({value, precision, currency}) => {
    const icon = <ImArrowUp fontSize={20} color="#ff5919" />;
    const amount = <Amount title="Expense" value={value} precision={precision} currency={currency} />
    return (
        <div class='expense'>
            <TransactionsSummary icon={icon} amount={amount} iconClassName={styles.icon}/>
        </div>
    )
}

export default Expense;

Expense.propTypes = {
    value: PropTypes.number,
    currency: PropTypes.string,
    precision: PropTypes.number,
}

Expense.defaultProps = {
    value: 0,
    currency: '$',
    precision: 2,
}