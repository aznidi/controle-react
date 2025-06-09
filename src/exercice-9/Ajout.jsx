import React, { useState } from 'react'

function Ajout({ addNew }) {
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    return (
        <div>
            
            <input type="text"  placeholder='Nom' onChange={(e) => {setNom(e.target.value)}}/>
            <input type="text"  placeholder='Prenom' onChange={(e) => setPrenom(e.target.value)}/>

            <button onClick={() => addNew(nom, prenom)}>Ajouter</button>
        </div>
    )
}

export default Ajout