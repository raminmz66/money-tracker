import React from 'react';
import PropTypes from 'prop-types';
import Amount from '../Amount/Amount';
import styles from './TotalBalance.module.css';

const TotalBalance = ({value, precision, currency}) => {
    return (
        <div class={styles.container}>
            <Amount title="Total Balance" value={value} precision={precision} currency={currency}></Amount>
        </div>
    );
}

export default TotalBalance;

TotalBalance.propTypes = {
    value: PropTypes.number,
    precision: PropTypes.number,
    currency: PropTypes.string
}

TotalBalance.defaultProps = {
    value: 0,
    precision: 2,
    currency: '$'
}