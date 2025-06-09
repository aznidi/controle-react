import React, { useEffect, useState } from 'react';
import Ajout from './Ajout';
import Edit from './Edit';
import Affichage from './Affichage';

function App() {
    const [data, setData] = useState([]);
    const [lastId, setLastId] = useState(0);
    const [editedResourceObject, setEditedResourceObject] = useState({
        id: null,
        nom: '',
        email: ''
    });


    const addNewResource = (nom, email) => {
        const newId = lastId + 1; // Calculer un nouvel ID
        const newResource = { id: newId, nom, email };

        // Mettre à jour le tableau des données et l'ID
        setData((prevData) => [...prevData, newResource]);
        setLastId(newId);
    };

    const deleteResource = (id) => {
        setData((prevData) => prevData.filter((etudiant) => etudiant.id !== id));
    };

    const editedResource = (resource) => {
        setEditedResourceObject(resource);
    };

    const ModifyNewEditedResource = (newResource) => {
        setData((prevData) =>
            prevData.map((etudiant) => (etudiant.id === newResource.id ? newResource : etudiant))
        );
    };

    return (
        <>
            <fieldset>
                <legend>Ajouter un Etudiant</legend>
                <Ajout addNewResource={addNewResource} />
            </fieldset>

            {
                editedResourceObject.id === null  ? '' :
                <fieldset>
                <legend>Modifier Un Etudiant</legend>
                <Edit
                    editedResourceObject={editedResourceObject}
                    ModifyNewEditedResource={ModifyNewEditedResource}
                />
                </fieldset>
            }
            

            <fieldset>
                <legend>Affichage</legend>
                <Affichage data={data} deleteResource={deleteResource} editedResource={editedResource} />
            </fieldset>
        </>
    );
}

export default App;
