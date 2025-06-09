import React, { useState } from 'react'
import Insertion from './Insertion'
import Affichage from './Affichage'
import Recherche from './Recherche'
import Edit from './Edit'

function App() {
    const [data, setData] = useState([]);
    const [isDisplay, setIsDisplay] = useState('none');
    const [editedResource, setEditedResource] = useState({id: null, nom: '', prenom: '', adresse: ''});

    const changeIsDisplay = (value) => setIsDisplay(value);
    const addNewResource = (newResource) => {
        setData( 
            [...data, newResource]
        )
    }

    const editResource = (resource) => {
        setEditedResource(resource)
    }

    const deleteResource = (id) => {
         setData(data.filter(el=>el.id != id))
    }
    return (
        <>
            <fieldset>
                <legend>Insertion</legend>
                <Insertion addNewResource={addNewResource}/>
            </fieldset>

            <fieldset>
                <legend>Affichage</legend>
                <Affichage data={data}  changeIsDisplay={changeIsDisplay}
                deleteResource={deleteResource} editResource={editResource}/>
            </fieldset>

            <fieldset>
                <legend>Recherche</legend>
                <Recherche />
            </fieldset>

            
            <fieldset style={{display: isDisplay}}>
                <legend>Edit</legend>
                <Edit resource={editedResource}/>
            </fieldset>
        </>
    )
}

export default App