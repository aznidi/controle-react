import React from 'react';

function Affichage({ data, deleteResource, editedResource }) {
    return (
        <ul>
            {data.map((etudiant) => (
                <li key={etudiant.id}>
                    {etudiant.nom} - {etudiant.email}
                    <button onClick={() => deleteResource(etudiant.id)}>Supprimer</button>
                    <button onClick={() => editedResource(etudiant)}>Modifier</button>
                </li>
            ))}
        </ul>
    );
}

export default Affichage;
