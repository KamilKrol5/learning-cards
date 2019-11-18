import {applyMiddleware, createStore} from "redux";
import reducers from './reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Tworzenie sklepu Redux
 */
export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));