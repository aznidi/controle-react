import { combineReducers, legacy_createStore as createStore } from "redux";
import { clientsReducers, commandesReducer } from './Reducers';

const rootReducers = combineReducers({
    clients: clientsReducers,
    commandes: commandesReducer,
});
export const store = createStore(rootReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());