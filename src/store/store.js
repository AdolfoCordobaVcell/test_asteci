import { createStore, combineReducers } from "redux";

import {reducer} from '../reducer/reducer';

const reducers = combineReducers({
    start: reducer
});

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);