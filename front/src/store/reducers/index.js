import {combineReducers} from "redux";
import {auth} from './authReducer';
import {randomUser} from "./testReducer";

export default combineReducers({
    auth,
    randomUser
});