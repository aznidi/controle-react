import React, { useState } from 'react'

function Insertion({addNewResource}) {

    const [id, setId] = useState();
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [adresse, setAdresse] = useState();
    return (
        <div>
            <label htmlFor="">ID</label>
            <input type="text" onChange={(e) => setId(e.target.value)}/><br />
            <label htmlFor="">Nom</label>
            <input type="text" onChange={(e) => setNom(e.target.value)}/><br />
            <label htmlFor="">Prenom</label>
            <input type="text" onChange={(e) => setPrenom(e.target.value)}/><br />
            <label htmlFor="">Adresse</label>
            <input type="text" onChange={(e) => setAdresse(e.target.value)}/><br />
            <button onClick={() => addNewResource({id, nom, prenom, adresse})}>Ajouter</button>

            <hr />
            <p>
                Le message envoye est : 
            </p>
        </div>
    )
}

export default Insertion