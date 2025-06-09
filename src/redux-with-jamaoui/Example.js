import { legacy_createStore as createStore } from 'redux';
import { CounterReducer } from './Reducers/CounterReducer';


const store = createStore(CounterReducer);
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch({type : 'counter/increment'})
store.dispatch({type : 'counter/increment'})
store.dispatch({type : 'counter/decrement'})