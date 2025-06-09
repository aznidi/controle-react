import React, {useState} from 'react'
import Affichage from './Affichage';
import Ajout from './Ajout';
import Edit from './Edit';

let ID = 0;
function App() {
    const [data, setData] = useState([]);
    const [ele, setEle] = useState({id:null, nom: '', prenom: ''}) 

    const addNew = (nom, prenom) => {
        const newId = ID + 1
        ID = ID + 1
        setData(
            [...data, {id:newId, nom: nom,prenom: prenom}]
        )
    }

    const deleteEle = (id) => {
        setData((prevData) =>
            prevData.filter((ele) => ele.id !== id)
        )
    }

    const edit = (ele_p) => {
        setEle(ele_p);
    }

    const updateResource = (objet) => {
        setData((prevData) =>
            prevData.map((ele) =>
                ele.id === objet.id ? { ...ele, nom: objet.nom, prenom: objet.prenom } : ele
            )
        );
    };
    
    return (
        <>
            <fieldset>
                <legend>Ajouter</legend>
                <Ajout addNew={addNew}/>
            </fieldset>

            <fieldset>
                <legend>Affichage</legend>
                <Affichage data={data} deleteEle={deleteEle} edit={edit}/>
            </fieldset>

            <fieldset>
                <legend>Modification</legend>
                <Edit ele={ele} updateResource={updateResource}/>
            </fieldset>
        </>
    )
}

export default App