import React from 'react';
import cm from "react-classname-module";
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

import styles from "../styles/Spinner.style.less";

const Spinner = () => {
    return (
        <div className='text-center'>
            <FontAwesome
                name='spinner'
                size='2x'
                spin
                className='spinner'
            />
        </div>
    )
};

export default cm(Spinner, styles);