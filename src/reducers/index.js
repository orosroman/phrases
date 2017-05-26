import {ACTIONS} from '../actions/index.js';

const initialState = {
    phraseList: [],
    fetching: true
};

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.FETCH_PHRASES:
            return {
                ...state,
                fetching: true
            };
        case ACTIONS.SUCCESS_FETCH_PHRASES:
            return {
                ...state,
                fetching: false,
                isFront: true,
                currentIndex: 0,
                phraseList: action.payload
            };
        case ACTIONS.ERROR_FETCH_PHRASES:
            return {
                ...state,
                fetching: false,
                error: true
            };
        case ACTIONS.FLIP:
            return {
                ...state,
                isFront: !state.isFront
            };
        case ACTIONS.GO_BACK: {
            const newBackIndex = (state.currentIndex === 0) ? state.phraseList.length - 1 : --state.currentIndex;
            return {
                ...state,
                currentIndex: newBackIndex,
                isFront: true
            };
        }
        case ACTIONS.GO_NEXT: {
            const newNextIndex = (state.currentIndex === state.phraseList.length - 1) ? 0 : ++state.currentIndex;
            return {
                ...state,
                currentIndex: newNextIndex,
                isFront: true
            };
        }
        case ACTIONS.GET_RANDOM: {
            const min = state.currentIndex === 0 ? 1 : 0,
                    max = state.currentIndex === state.phraseList.length - 1 ?
                        state.phraseList.length - 2 :
                        state.phraseList.length - 1,
                    randomGenerator = (min, max) => {
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    },
                    randomNumber = randomGenerator(min, max),
                    randomIndex = randomNumber === state.currentIndex ? randomNumber + 1 : randomNumber;
            return {
                ...state,
                currentIndex: randomIndex,
                isFront: true
            };
        }
        default:
            return state;
    }
}

