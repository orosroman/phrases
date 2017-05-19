import React from 'react';
import PropTypes from 'prop-types';
import cm from "react-classname-module";
import classNames from 'classnames/bind';

import styles from "../styles/PhraseDisplayer.style.less";

const PhraseDisplayer = ({phrase, isFrontFlipper}) => (
    <div className='flip-container '>
        <div className={classNames('flipper', {'rotate': isFrontFlipper === false})}>
            <div className='front'>
                <div className='jumbotron jumb text-center h3'>
                    {phrase.en}
                </div>
            </div>
            <div className='back'>
                <div className='jumbotron jumb text-center h3'>
                    {phrase.ua}
                </div>
            </div>
        </div>
    </div>
)

PhraseDisplayer.propTypes = {
    phrase: PropTypes.object.isRequired,
    isFrontFlipper: PropTypes.bool.isRequired
}

export default cm(PhraseDisplayer, styles);