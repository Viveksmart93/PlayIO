import {createStore,combineReducers,applyMiddleware} from 'redux';
import Reducer from './reducer';
import {apiMiddleware} from './apiMiddleware';

const rootReducer = combineReducers({
    appData: Reducer
});

const configureStore = () => {
    return createStore(rootReducer,{}, applyMiddleware(apiMiddleware));
}

export default configureStore;