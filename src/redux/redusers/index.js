import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import fetchDataAction from './fetchDataReducer';
import favoriteList from './saveToListReducer';


const rootReducer = combineReducers({
    input: inputReducer,
    data: fetchDataAction,
    favoriteList: favoriteList
});

export default rootReducer;