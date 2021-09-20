import React from 'react';
import PropTypes from 'prop-types';
import { Empty } from 'antd';
import image from '../../assets/images/no-result.svg';
import styles from './EmptyTransactionList.module.css';

const EmptyTransactionList = () => {
    return (
        <div class={styles.container}>
            <Empty image={image} description="No transaction in selected time period" />
        </div>
    );
}

export default EmptyTransactionList;

EmptyTransactionList.propTypes = {

}

EmptyTransactionList.defaultProps = {

}