import {combineReducers} from "redux";
import {auth} from './authReducer';

/**
 * łączenie reducerów
 */
export default combineReducers({
    auth,
});