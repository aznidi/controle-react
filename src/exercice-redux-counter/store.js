import { legacy_createStore as createStore } from 'redux';
import { counterReducer } from './Reducers';

export const store = createStore(counterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());