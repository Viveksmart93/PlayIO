import { Type } from './type';
const API = "https://opentdb.com/api.php?amount=10"

export const apiMiddleware = store => next => action => {
    // Pass all actions through by default
    next(action);
    switch (action.type) {
        // In case we receive an action to send an API request
        case Type.GET_QUESTIONS:
            // Dispatch GET_MOVIE_DATA_LOADING to update loading state
            store.dispatch({ type: Type.GET_QUES_LOADING });
            // Make API call and dispatch appropriate actions when done
            var query = action.payload?`&difficulty=${action.payload}`:''
            fetch(`${API}${query}`)
                .then(response => response.json())
                .then(data => next({
                    type: Type.GET_QUES_RECEIVED,
                    payload: data.results
                }))
                .catch(error => next({
                    type: Type.GET_QUES_ERROR,
                    error
                }));
            break;
        // Do nothing if the action does not interest us
        default:
            break;
    }
};