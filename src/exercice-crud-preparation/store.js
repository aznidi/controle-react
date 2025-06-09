import { legacy_createStore as createStore, combineReducers } from 'redux';
import { clientReducer, commandeReducer } from './Reducers';

const rootReducers = combineReducers({
    clients: clientReducer,
    commandes: commandeReducer,
})

export const store = createStore(rootReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());