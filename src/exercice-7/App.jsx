import React, { useState } from 'react'
import Saisie from './Saisie'
import Affiche from './Affiche'
import Edit from './Edit';


let list=[
        {nom:"banane",type:"fruit"},
        {nom:"Orange",type:"fruit"},
        {nom:"Kiwi",type:"fruit"},
        {nom:"Prune",type:"fruit"},
        {nom:"Navet",type:"legume"},
        {nom:"Tomate",type:"legume"},
        {nom:"banaPomme de tere",type:"legume"},
        {nom:"clementine",type:"fruit"},
    ]



function App() {
    const [filtredData, setFiltredData] = useState([]);
    const [type, setType] = useState('');
    const [editedResourceVariable, setEditedResourceVariable] = useState({nom: '', type: ''});

    const filtreDataWithType = (argument_type) => {
        setFiltredData(
            list.filter((ele) => ele.type == argument_type)
        )

        setType(argument_type);
    }

    const deleteResource = (nom) => {
        setFiltredData(
            filtredData.filter((ele) => ele.nom != nom)
        )

        list = list.filter((ele) => ele.nom != nom)
    }

    const editResource = (resource) => {
        setEditedResourceVariable(resource)
    }

    const modifyNewResource = (newElement) =>{
        const element = list.find((ele) => ele.nom == newElement.nom);
        console.log(element, newElement);
        if(element.type != newElement.type){
            deleteResource(newElement.nom);
            list = [...list, newElement];
            setFiltredData(
                [... filtredData, newElement]
            )

        }
        
    }
    return (
        <>
            <fieldset>
                <legend>Saisie</legend>
                <Saisie filtreDataWithType={filtreDataWithType}/>
            </fieldset>

            <fieldset>
                <legend>Affiche</legend>
                <Affiche type={type} filtredData={filtredData} deleteResource={deleteResource} editResource={editResource}/>
            </fieldset>

            <fieldset>
                <legend>Edit</legend>
                <Edit editedResourceVariable={editedResourceVariable} modifyNewResource={modifyNewResource}/>
            </fieldset>
        </>
    )
}

export default App