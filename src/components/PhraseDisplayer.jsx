import React from 'react';
import PropTypes from 'prop-types';
import cm from 'react-classname-module';

import styles from '../styles/PhraseDisplayer.style.less';

const PhraseDisplayer = ({phrase, isFront}) => (
    <div className='flip-container'>
        <div className='jumbotron displayer h3 text-center'>
            {isFront ? phrase.en : phrase.ua}
        </div>
    </div>
);

PhraseDisplayer.propTypes = {
    phrase: PropTypes.object.isRequired,
    isFront: PropTypes.bool.isRequired
};

export default cm(PhraseDisplayer, styles);