import React from 'react';
import { Alert } from 'react-bootstrap';
import cm from "react-classname-module";
import classNames from 'classnames/bind';

import styles from "../styles/InfoAlert.style.less";

const InfoAlert = ({text, type}) => (
    <div className='message-alert'>
        <Alert bsStyle={type} className='text-center'>
            <strong>{text}</strong>
        </Alert>
    </div>
)

export default cm(InfoAlert, styles);