import fetch from 'isomorphic-fetch';

export const ACTIONS = {
    GO_BACK: 'GO_BACK',
    GO_NEXT: 'GO_NEXT',
    GET_RANDOM: 'GET_RANDOM',
    FLIP: 'FLIP',
    FETCH_PHRASES: 'FETCH_PHRASES',
    SUCCESS_FETCH_PHRASES: 'SUCCESS_FETCH_PHRASES',
    ERROR_FETCH_PHRASES: 'ERROR_FETCH_PHRASES'
};

export const flipPhrase = () => {
    return {
        type: ACTIONS.FLIP
    };
};

export const back = () => {
    return {
        type: ACTIONS.GO_BACK
    };
};

export const next = () => {
    return {
        type: ACTIONS.GO_NEXT
    };
};

export const random = () => {
    return {
        type: ACTIONS.GET_RANDOM
    };
};

const fetchPhrasesStart = () => {
    return {
        type: ACTIONS.FETCH_PHRASES
    };
};

const fetchPhrasesSuccess = (phraseList) => {
    return {
        type: ACTIONS.SUCCESS_FETCH_PHRASES,
        payload: phraseList
    };
};

const fetchPhrasesError = () => {
    return {
        type: ACTIONS.ERROR_FETCH_PHRASES
    };
};

export const fetchPhrases = () => {
    return dispatch => {
        dispatch(fetchPhrasesStart());
        setTimeout(() => {
            let isOk;
            fetch('phrases.json')
                .then(response => {
                    isOk = response.ok;
                    return response.json();
                })
                .then(json => {
                    if (isOk) {
                        dispatch(fetchPhrasesSuccess(json.phraseList));
                    } else {
                        dispatch(fetchPhrasesError());
                    }
                });
        }, 1000);
    };
};
