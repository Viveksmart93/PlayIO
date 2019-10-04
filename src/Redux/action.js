import { Type } from './type';

export const getQuestions = (data) => {
    return {
        type: Type.GET_QUESTIONS,
        payload: data
    }
}

export const setCurrentScore = (data) => {
    return {
        type: Type.SET_CURRENT_SCORE,
        payload: data
    }
}

export const setLastScore = (data) => {
    return {
        type: Type.SET_LAST_SCORE,
        payload: data
    }
}
