// Entree.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addOperation } from './actions';

const Entree = () => {
  const [val1, setVal1] = useState('');
  const [val2, setVal2] = useState('');
  const [operation, setOperation] = useState('');
  const dispatch = useDispatch();

  const handleCalculate = () => {
    let result;
    let type;
    switch (operation) {
      case '+':
        result = parseFloat(val1) + parseFloat(val2);
        type = 'ADD';
        break;
      case '-':
        result = parseFloat(val1) - parseFloat(val2);
        type = 'SUBTRACT';
        break;
      case '*':
        result = parseFloat(val1) * parseFloat(val2);
        type = 'MULTIPLY';
        break;
      case '/':
        result = parseFloat(val2) !== 0 ? parseFloat(val1) / parseFloat(val2) : 'impossible';
        type = 'DIVIDE';
        break;
      default:
        result = 'Opération invalide';
        type = 'INVALID';
    }
    const operationString = `${val1} ${operation} ${val2} = ${result}`;
    dispatch(addOperation(operationString, result, type));
  };

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
    </div>
  );
};

export default Entree;
