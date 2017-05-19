import {ACTIONS} from '../actions/index.js'

const initialState = {
    isFrontFlipper: true,
    currentIndex: 0,
    phraseList: [
        {
            id: 1,
            en: "go back",
            ua: "повертатися"
        },
        {
            id: 2,
            en: "as soon as possible",
            ua: "якнайшвидше"
        },
        {
            id: 3,
            en: "it doesn't matter",
            ua: "не має значення"
        },
        {
            id: 4,
            en: "what's going on?",
            ua: "що відбувається?"
        },
        {
            id: 5,
            en: "I can't be bothered",
            ua: "мене це не турбує"
        },
        {
            id: 6,
            en: "I can't be bothered I can't be bothered I can't be bothered",
            ua: "мене це не турбує мене це не турбує мене це не турбує"
        }
    ]
}

export default function reducers(state = initialState, action) {
    switch (action.type) {
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
            return {...state, currentIndex: randomNum};
        default:
            return state;
    }
}

