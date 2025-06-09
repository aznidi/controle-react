import React, { useState } from 'react'
import Saisie from './Saisie'
import Affichage from './Affichage'

const list=[
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
    const [searchTerm, setSearchTerm] = useState();
    const [filtredData, setFiltredData] = useState([]);
    const [serchedTerm, setSearchedTerm] = useState(null);
    const [isNewSearch, setIsnewSearch] = useState(false);

    const setFiltredDataArray = (type) => {
        setFiltredData(
            list.filter((fr) => fr.type === type)
        );
        setSearchTerm(type);
        setIsnewSearch(true);
    }


    return (
        <>
            <fieldset>
                <legend>Rechercher un legume :</legend>
                <Saisie setFiltredDataArray={setFiltredDataArray}/>
            </fieldset>

            <fieldset>
                <legend>Rechercher un legume :</legend>
                <Affichage filtredData={filtredData} searchedTerm={searchTerm} isNewSearch={isNewSearch}/>
            </fieldset>

        </>
    )
}

export default App