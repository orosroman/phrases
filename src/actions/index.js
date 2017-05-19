export const ACTIONS = {
    GO_BACK: 'GO_BACK',
    GO_NEXT: 'GO_NEXT',
    GET_RANDOM: 'GET_RANDOM',
    FLIP: 'FLIP'
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
