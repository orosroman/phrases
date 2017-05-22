import React, {Component} from 'react';
import {connect} from 'react-redux';

import PhraseDisplayer from '../components/PhraseDisplayer';
import ControlPanel from '../components/ControlPanel';
import InfoAlert from '../components/InfoAlert';
import Spinner from '../components/Spinner';
import {flipPhrase} from '../actions/index.js';
import {back} from '../actions/index.js';
import {next} from '../actions/index.js';
import {random} from '../actions/index.js';
import {fetchPosts} from '../actions/index.js';

class App extends Component {
    componentWillMount() {
        {this.props.fetchPosts()}
    }
    render() {
        return (
            <div className="container">
                 {(!this.props.fetching && this.props.phrasesCount !== 0) &&
                    <div>
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
                 }
                {(!this.props.fetching && this.props.phrasesCount === 0 && !this.props.error) &&
                    <InfoAlert text={'Vocabulary is empty (Словник порожній)'} type={'info'}/>
                }
                {(!this.props.fetching && this.props.error) &&
                    <InfoAlert
                        type={'danger'}
                        text={'An error occurred with getting data from the server (Сталася помилка при отриманні даних з сервера)'}
                    />
                }
                {this.props.fetching &&
                    <Spinner />
                }
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
        currentIndex: currentIndex,
        fetching: state.fetching,
        error: state.error
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
        },
        fetchPosts: () => {
            dispatch(fetchPosts())
        }
    }
}

export default connect (mapStateToProps, mapDispatchToState)(App);