import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, setStep } from './actions';

const Affichage = () => {
  const dispatch = useDispatch();
  const {
    count,
    incrementCount,
    decrementCount,
    resetCount,
    totalOperations,
    step,
    lastOperation,
  } = useSelector((state) => state);

  const handleStepChange = (e) => {
    const newStep = Number(e.target.value) || 1;
    dispatch(setStep(newStep));
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center'}}>
      <h1>Gestionnaire de Compteur Redux</h1>
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="stepInput" style={{ marginRight: '10px' }}>Pas :</label>
        <input
          id="stepInput"
          type="number"
          value={step}
          onChange={handleStepChange}
          style={{
            padding: '5px',
            width: '50px',
            textAlign: 'center',
          }}
        />
      </div>
      <p>Valeur actuelle du compteur : <strong>{count}</strong></p>
      <p>Nature de la dernière opération : <strong>{lastOperation}</strong></p>
      <p>Nombre d'opérations d'incrémentation : <strong>{incrementCount}</strong></p>
      <p>Nombre d'opérations de décrémentation : <strong>{decrementCount}</strong></p>
      <p>Nombre d'opérations de mise à zéro : <strong>{resetCount}</strong></p>
      <p>Nombre total d'opérations : <strong>{totalOperations}</strong></p>
      <div style={{ marginTop: '20px' }}>
        <button
          onClick={() => dispatch(increment())}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Incrémenter
        </button>
        <button
          onClick={() => dispatch(decrement())}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#f44336',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Décrémenter
        </button>
        <button
          onClick={() => dispatch(reset())}
          style={{
            padding: '10px 20px',
            margin: '5px',
            backgroundColor: '#2196F3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Réinitialiser
        </button>
      </div>
    </div>
  );
};

export default Affichage;
