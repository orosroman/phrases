import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';
import cm from 'react-classname-module';

import styles from '../styles/InfoAlert.style.less';

const InfoAlert = ({text, type}) => (
    <div className='message-alert'>
        <Alert bsStyle={type} className='text-center'>
            <strong>{text}</strong>
        </Alert>
    </div>
);

InfoAlert.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default cm(InfoAlert, styles);