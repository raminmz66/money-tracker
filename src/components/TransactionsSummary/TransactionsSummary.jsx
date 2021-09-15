import React from 'react';
import PropTypes from 'prop-types';
import Amount from '../Amount/Amount';
import { Card, Row, Col } from 'antd';
import { ImArrowUp } from "react-icons/im";
import styles from './TransactionsSummary.module.css';

var classNames = require('classnames');

const TransactionsSummary = ({icon, amount, iconClassName}) => {
    const iconClassNames = classNames(`${styles.icon}`, iconClassName);
    return (
        <div className={styles.container}>
            <Card bordered={false}>
                <Row gutter={24} align="middle">
                    <Col flex="50px" className={iconClassNames}>
                        {icon}
                    </Col>
                    <Col flex="auto">
                        {amount}
                    </Col>
                </Row>
            </Card>
        </div>
    );
}

export default TransactionsSummary;

TransactionsSummary.propTypes = {
    iconClassName: PropTypes.string
}

TransactionsSummary.defaultProps = {
    icon: <ImArrowUp fontSize={20} color="#ff5919" />,
    amount: <Amount title="Expense" value={10} precision={2} currency="$" />
}