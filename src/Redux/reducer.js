import { Type } from './type';

const initialState = {
    loading: false,
    questions: [],
    lastScore: 0,
    quesIndex: 0,
    currentScore: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_QUES_LOADING:
            return {
                ...state,                   // keep the existing state,
                loading: true,              // but change loading to true
            };
        case Type.GET_QUES_RECEIVED:
            return {
                ...state,
                loading: false,             // set loading to false
                questions: action.payload, // update movies array with reponse data
            };
        case Type.GET_QUES_ERROR:
            return state;
        case Type.SET_CURRENT_SCORE:
            return {
                ...state,
                currentScore: action.payload.score,
                quesIndex: action.payload.index
            };
        case Type.SET_LAST_SCORE:
            return {
                ...state,
                currentScore: 0,
                quesIndex: 0,
                lastScore: action.payload,
                questions: []
            };
        default:
            return state;
    }
};

export default reducer;