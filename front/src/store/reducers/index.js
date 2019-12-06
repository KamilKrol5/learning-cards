import {combineReducers} from "redux";
import {auth} from './authReducer';
import {dashboard} from "./dashboardReducer";

/**
 * łączenie reducerów
 */
export default combineReducers({
    auth,
    dashboard,
});