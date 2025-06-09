import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, maz } from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      The Counter is { counter }
      <hr />
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(maz())}>maz</button>
    </div>
  )
}

export default App