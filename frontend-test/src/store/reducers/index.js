import { combineReducers } from 'redux';
import vehicles from './vehicles';
const appReducers = combineReducers({
    vehicles,
});

export default appReducers;