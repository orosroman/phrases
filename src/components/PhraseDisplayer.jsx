import React from 'react';
import PropTypes from 'prop-types';
import cm from "react-classname-module";
import classNames from 'classnames/bind';

import styles from "../styles/PhraseDisplayer.style.less";

const PhraseDisplayer = ({phrase, isFrontFlipper}) => (
    <div className='flip-container'>
        <div className='jumbotron jumb h3'>
            {isFrontFlipper ? phrase.en : phrase.ua}
        </div>
    </div>
)

PhraseDisplayer.propTypes = {
    phrase: PropTypes.object.isRequired,
    isFrontFlipper: PropTypes.bool.isRequired
}

export default cm(PhraseDisplayer, styles);