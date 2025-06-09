// Sortie.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearOperations, setFilter } from './actions';

const Sortie = () => {
  const { resultat, operations, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredOperations = operations.filter((op) =>
    filter === 'ALL' ? true : op.type === filter
  );

  return (
    <div>
      <h3>Le résultat de l'opération est : {resultat}</h3>
      <h4>Filtrer les opérations :</h4>
      <select onChange={(e) => dispatch(setFilter(e.target.value))}>
        <option value="ALL">Toutes</option>
        <option value="ADD">Additions</option>
        <option value="SUBTRACT">Soustractions</option>
        <option value="MULTIPLY">Multiplications</option>
        <option value="DIVIDE">Divisions</option>
      </select>
      <h4>Historique des opérations :</h4>
      <ul>
        {filteredOperations.map((op, index) => (
          <li key={index}>{op.text}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(clearOperations())}>Réinitialiser</button>
    </div>
  );
};

export default Sortie;
