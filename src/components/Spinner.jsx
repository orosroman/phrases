import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import cm from "react-classname-module";
import FontAwesome from 'react-fontawesome';
import 'font-awesome/css/font-awesome.css';

import styles from "../styles/Spinner.style.less";

class Spinner extends Component {
    render() {
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
    }
}

export default cm(Spinner, styles);