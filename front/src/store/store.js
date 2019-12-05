import {applyMiddleware, createStore} from "redux";
import reducers from './reducers';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Tworzenie sklepu Redux
 */

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    }
    catch (e) {
        console.log(e);
    }
}
function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    }
    catch (e) {
        console.log(e);
        return undefined;
    }
}
const persistedState = loadFromLocalStorage();

export const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()));