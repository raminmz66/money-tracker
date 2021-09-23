import React from 'react';
import PropTypes, { string } from 'prop-types';
import styles from './Date.module.css';
import moment from 'moment';

const formats = {
    'd/m/y': 'DD/MM/YYYY',
    'm/d/y': 'MM/DD/YYYY',
    'y/m/d': 'YYYY/MM/DD',
}

const Date = ({value, format, displayDay}) => {
    let displayFormat = formats[format];
    if (displayDay) {
        displayFormat = 'ddd. ' + displayFormat;
    }
    const date = moment(value, 'DD/MM/YYYY');
    let displayDate = '-';
    if (date.isValid()) {
        displayDate = date.format(displayFormat);
    } 
    return (
        <div class={styles.container}>
            {displayDate}
        </div>
    );
}

export default Date;

Date.propTypes = {
    value: string.isRequired,
    format: PropTypes.oneOf(Object.keys(formats)),
    displayDay: PropTypes.bool
}

Date.defaultProps = {
    format: 'd/m/y',
    displayDay: false
}