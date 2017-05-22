import fetch from 'isomorphic-fetch';

export const ACTIONS = {
    GO_BACK: 'GO_BACK',
    GO_NEXT: 'GO_NEXT',
    GET_RANDOM: 'GET_RANDOM',
    FLIP: 'FLIP',
    FETCH_PHRASES: 'FETCH_PHRASES',
    SUCCESS_FETCH_PHRASES: 'SUCCESS_FETCH_PHRASES',
    ERROR_FETCH_PHRASES: 'ERROR_FETCH_PHRASES'
}

export const flipPhrase = () => {
    return {
        type: ACTIONS.FLIP
    }
}

export const back = () => {
    return {
        type: ACTIONS.GO_BACK
    }
}

export const next = () => {
    return {
        type: ACTIONS.GO_NEXT
    }
}

export const random = () => {
    return {
        type: ACTIONS.GET_RANDOM
    }
}

const startFetchingPhrases = () => {
    return {
        type: ACTIONS.FETCH_PHRASES
    }
}

const successFethingPhrases = (phraseList) => {
    return {
        type: ACTIONS.SUCCESS_FETCH_PHRASES,
        payload: phraseList
    }
}

const errorFethingPhrases = () => {
    return {
        type: ACTIONS.ERROR_FETCH_PHRASES
    }
}

export const fetchPhrases = () => {
    return dispatch => {
    dispatch(startFetchingPhrases())
    setTimeout(() => {
        let isOk;
        fetch(`http://localhost:3000/phraseList`)
        .then(response => {
            isOk = response.ok
            console.log(response);
            return response.json()
        })
        .then(json => {
            if (isOk) {
                dispatch(successFethingPhrases(json))
            } else {
                dispatch(errorFethingPhrases())
            }
        })
    }, 3000)
    }
}
