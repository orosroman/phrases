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

const successFethingPhraes = (phraseList) => {
    return {
        type: ACTIONS.SUCCESS_FETCH_PHRASES,
        payload: phraseList
    }
}

const errorFethingPhraes = () => {
    return {
        type: ACTIONS.ERROR_FETCH_PHRASES
    }
}

export const fetchPosts = () => {
    return dispatch => {
    dispatch(startFetchingPhrases())
    setTimeout(() => {
        let status;
        fetch(`http://localhost:3000/phraseList`)
        .then(response => {
            status = response.status
            return response.json()
        })
        .then(json => {
            if (status === 200) {
                dispatch(successFethingPhraes(json))
            } else {
                dispatch(errorFethingPhraes())
            }
        })
    }, 3000)
    }
}