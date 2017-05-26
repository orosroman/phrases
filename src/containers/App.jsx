import React, {Component} from 'react';
import {connect} from 'react-redux';

import PhraseDisplayer from '../components/PhraseDisplayer';
import ControlPanel from '../components/ControlPanel';
import InfoAlert from '../components/InfoAlert';
import Spinner from '../components/Spinner';
import {flipPhrase, back, next, random, fetchPhrases} from '../actions/index.js';

class App extends Component {
    componentWillMount() {
        this.props.fetchPhrases();
    }

    render() {
        return (
            <div className="container">
                {!this.props.fetching && this.props.phrasesCount !== 0 &&
                    <div>
                        <PhraseDisplayer
                            phrase={this.props.phrase}
                            isFront={this.props.isFront}
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
                }
                {!this.props.fetching && this.props.phrasesCount === 0 && !this.props.error &&
                    <InfoAlert text={'Vocabulary is empty'} type={'info'}/>
                }
                {!this.props.fetching && this.props.error &&
                    <InfoAlert
                        type={'danger'}
                        text={'An error occurred with getting data from the server'}
                    />
                }
                {this.props.fetching &&
                    <Spinner />
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const currentIndex = state.currentIndex;
    return {
        phrase: state.phraseList[currentIndex],
        phrasesCount: state.phraseList.length,
        isFront: state.isFront,
        currentIndex: currentIndex,
        fetching: state.fetching,
        error: state.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFlipClick: () => {
            dispatch(flipPhrase());
        },
        onBackClick: () => {
            dispatch(back());
        },
        onNextClick: () => {
            dispatch(next());
        },
        onRandomClick: () => {
            dispatch(random());
        },
        fetchPhrases: () => {
            dispatch(fetchPhrases());
        }
    };
};

export default connect (mapStateToProps, mapDispatchToProps)(App);
