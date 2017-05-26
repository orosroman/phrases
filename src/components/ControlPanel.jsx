import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';
import cm from "react-classname-module";

import styles from "../styles/ControlPanel.style.less";

class ControlPanel extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-sm-6 col-md col-indent-fix'>
                    <Button
                        bsStyle="primary"
                        className="w-100 control-btn"
                        onClick={this.props.onBackClick}
                    >
                        Back
                    </Button>
                </div>
                <div className='col-12 col-sm-6 col-md col-indent-fix'>
                    <Button
                        bsStyle="primary"
                        className="w-100 control-btn"
                        onClick={this.props.onNextClick}
                    >
                        Next
                    </Button>
                </div>
                <div className='col-12 col-sm-6 col-md col-indent-fix'>
                    <Button
                        bsStyle="primary"
                        className="w-100 control-btn"
                        onClick={this.props.onRandomClick}
                    >
                        Random
                    </Button>
                </div>
                <div className='col-12 col-sm-6 col-md col-indent-fix'>
                    <Button
                        bsStyle="success"
                        className="w-100 control-btn"
                        onClick={this.props.onFlipClick}
                    >
                        Flip
                    </Button>
                </div>
            </div>
        )
    }
}

ControlPanel.propTypes = {
    phrasesCount: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
    onFlipClick: PropTypes.func.isRequired,
    onBackClick: PropTypes.func.isRequired,
    onNextClick: PropTypes.func.isRequired,
    onRandomClick: PropTypes.func.isRequired,
};

export default cm(ControlPanel, styles);