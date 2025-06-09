import { legacy_createStore as createStore } from 'redux';
import calculatorReducer from './reducer';

const store = createStore(calculatorReducer);

export default store;
