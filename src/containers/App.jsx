import React, {Component} from 'react';
import {connect} from 'react-redux';

import PhraseDisplayer from '../components/PhraseDisplayer';
import ControlPanel from '../components/ControlPanel';
import {flipPhrase} from '../actions/index.js';
import {back} from '../actions/index.js';
import {next} from '../actions/index.js';
import {random} from '../actions/index.js';

class App extends Component {
    render() {
        return (
            <div className="container">
                <PhraseDisplayer
                    phrase={this.props.phrase}
                    isFrontFlipper={this.props.isFrontFlipper}
                />
                <ControlPanel 
                    phrasesCount={this.props.phrasesCount}
                    currentIndex={this.props.currentIndex}
                    onFlipClick={this.props.onFlipClick}
                    onBackClick={this.props.onBackClick}
                    onNextClick={this.props.onNextClick}
                    onRandomClick={this.props.onRandomClick}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const currentIndex = state.currentIndex;
    return {
        phrase: state.phraseList[currentIndex],
        phrasesCount: state.phraseList.length,
        isFrontFlipper: state.isFrontFlipper,
        currentIndex: currentIndex
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        onFlipClick: () => {
            dispatch(flipPhrase())
        },
        onBackClick: () => {
            dispatch(back())
        },
        onNextClick: () => {
            dispatch(next())
        },
        onRandomClick: () => {
            dispatch(random())
        }
    }
}

export default connect (mapStateToProps, mapDispatchToState)(App);