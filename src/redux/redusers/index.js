import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import fetchDataAction from './fetchDataReducer';
import loadingReducer from './loadingReducer';
import favoriteList from './saveToListReducer';


const rootReducer = combineReducers({
    input: inputReducer,
    data: fetchDataAction,
    isLoading: loadingReducer,
    favoriteList,
});

export default rootReducer;