import {ACTIONS} from '../actions/index.js'

const initialState = {
    phraseList: [],
    fetching: true
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.FETCH_PHRASES:
            return {...state, fetching: true};
        case ACTIONS.SUCCESS_FETCH_PHRASES:
            return {...state, fetching: false, isFrontFlipper: true, currentIndex: 0, phraseList: action.payload};
        case ACTIONS.ERROR_FETCH_PHRASES:
            return {...state, fetching: false, error: true};
        case ACTIONS.FLIP:
            return {...state, isFrontFlipper: !state.isFrontFlipper};
        case ACTIONS.GO_BACK:
            return {
              ...state,
              currentIndex: --state.currentIndex,
              isFrontFlipper: true
            };
        case ACTIONS.GO_NEXT:
            return {
              ...state,
              currentIndex: ++state.currentIndex,
              isFrontFlipper: true
            };
        case ACTIONS.GET_RANDOM:
            const min = 0;
            const max = state.phraseList.length - 1
            let random = (min, max) => {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            let randomNum = random(min, max);
            
            while(randomNum === state.currentIndex) {
                randomNum = random(min, max)
            }
            return {
                ...state,
                currentIndex: randomNum,
                isFrontFlipper: true
            };
        default:
            return state;
    }
}

