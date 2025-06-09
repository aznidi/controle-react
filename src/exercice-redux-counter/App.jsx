import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { decrementer, incrementer, misazero } from './Actions';
function App() {
    const [step, setStp] = useState(1)
    const dispatch = useDispatch();

    
    const counter = useSelector(state => state.counter)
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <input type="number" value={step} onChange={(e) => setStp(e.target.value)} />
            <button onClick={() => dispatch(incrementer(step))}>+</button>
            <button onClick={() => dispatch(decrementer(step))}>-</button>
            <button onClick={() => dispatch(misazero())}>maz</button>
        </div>
    )
}

export default App