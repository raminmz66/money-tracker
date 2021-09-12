import React from 'react';
import Amount from '../Amount/Amount';
import { Card, Row, Col } from 'antd';
import { ImArrowUp } from "react-icons/im";
import './TransactionsSummary.css';

const TransactionsSummary = ({icon, amount}) => {
    return (
        <div className="transaction-summary">
            <Card bordered={false}>
                <Row gutter={24} align="middle">
                    <Col flex="50px" className="icon">
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

TransactionsSummary.defaultProps = {
    icon: <ImArrowUp fontSize={20} color="#ff5919" />,
    amount: <Amount title="Expense" value={10} precision={2} currency="$" />
}