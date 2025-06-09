import React, { useState } from 'react'
import Saisie from './Saisie'
import Affichage from './Affichage'

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
    const [typeFruit, setTypeFruit] = useState('');

    const filterDataWithType = (type) => {
        setFiltredData(
            list.filter((fruit) => fruit.type == type)
        )
        setTypeFruit(type)
    }

    const deleteResource = (resourceName) => {
        setFiltredData(
            filtredData.filter((fruit) => fruit.nom != resourceName)
        )

        list = list.filter((fruit) => fruit.nom != resourceName);

        
    } 
    return (
        <>
            <fieldset>
                <legend>Saisir</legend>
                <Saisie filterDataWithType={filterDataWithType}/>
            </fieldset>

            <fieldset>
                <legend>Affichage</legend>
                <Affichage filtredData={filtredData} typeFruit={typeFruit} deleteResource={deleteResource}/>
            </fieldset>
        </>
    )
}

export default App