import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionListSummaryDay.module.css';
import Date from '../Date/Date';
import Amount from '../Amount/Amount';

const TransactionListSummaryDay = ({date, amount, currency}) => {
    return (
        <div class={styles.container}>
            <div class={styles.date}>
                <Date value={date} displayDay={true} />
            </div>
            <div class={styles.amount}>
                <Amount value={amount} currency={currency}/>
            </div>
        </div>
    );
}

export default TransactionListSummaryDay;

TransactionListSummaryDay.propTypes = {
    date: PropTypes.string.isRequired,
    amount: PropTypes.number,
    currency: PropTypes.string
}

TransactionListSummaryDay.defaultProps = {
    currency: '$'
}