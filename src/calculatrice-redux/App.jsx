import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOperation, clearOperations } from './actions';

function App() {
    const [val1, setVal1] = useState();
    const [val2, setVal2] = useState();
    const [operation, setOperation] = useState();
    const { operations } = useSelector(state => state) ;
    const dispatch = useDispatch();

    const handleCalculate = () => {
        let result;
        switch (operation) {
            case "+":
                result = parseFloat(val1) + parseFloat(val2);
                break;
            case "-":
                result = parseFloat(val1) - parseFloat(val2);
                break;
            case "*":
                result = parseFloat(val1) * parseFloat(val2);
                break;
            case "/":
                result = val2 != 0 ? parseFloat(val1) * parseFloat(val2) : 'impossible';
                break;
            default:
                result = "impossible";
                break;
        }

        let operationTrace = `${val1} ${operation} ${val2} = ${result}`;

        dispatch(addOperation(result, operationTrace));

        return result;
    }

    return (
        <div>
        <input type="number" value={val1} onChange={(e) => setVal1(e.target.value)} placeholder="Valeur 1" />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="">Choisir une opération</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="number" value={val2} onChange={(e) => setVal2(e.target.value)} placeholder="Valeur 2" />
        <button onClick={handleCalculate}>Calculer</button>


        <hr />

        <div>
            La listes des operations :

            {operations.length != 0 ? <button onClick={() => dispatch(clearOperations())}> Supprimer historique</button> : ''}

            <hr />
            {
                operations.map((ele, index) => (
                    <li key={index}>
                        {ele}
                    </li>
                ))
            }
        </div>
        </div>
    )
}

export default App