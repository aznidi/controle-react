import { legacy_createStore as createStore } from 'redux'
import SimulationReducer from './Reducer';

const store = createStore(SimulationReducer);

export default store;