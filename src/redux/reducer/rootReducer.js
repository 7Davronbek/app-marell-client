import { combineReducers } from "redux";
import { statesReducer } from './statesReducer'

export const rootReducer = combineReducers({
    states: statesReducer
});