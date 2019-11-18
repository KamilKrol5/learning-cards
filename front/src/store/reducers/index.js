import {combineReducers} from "redux";
import {auth} from './authReducer';
import {randomUser} from "./testReducer";

/**
 * łączenie reducerów
 */
export default combineReducers({
    auth,
    randomUser
});