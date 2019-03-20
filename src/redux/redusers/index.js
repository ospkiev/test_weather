import { combineReducers } from 'redux';
import inputReducer from './inputReducer';
import fetchDataAction from './fetchDataReducer';
import fetchDataMoreDaysAction from './fetchDataMoreDaysReducer';
import favoriteList from './saveToListReducer';


const rootReducer = combineReducers({
    input: inputReducer,
    data: fetchDataAction,
    favoriteList: favoriteList,
    moreDaysData: fetchDataMoreDaysAction,
});

export default rootReducer;