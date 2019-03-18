import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import fetchDataAction from './fetchDataReducer';


const rootReducer = combineReducers({
    input: inputReducer,
    data: fetchDataAction,
});

export default rootReducer;