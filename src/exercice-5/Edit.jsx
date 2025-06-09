import React, { useEffect, useState } from 'react'

function Edit({ editedResource }) {

    const [id, setId] = useState();
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();
    const [adresse, setAdresse] = useState();

    useEffect(() => {
        if (editedResource) {
            setId(editedResource.id || null);
            setNom(editedResource.nom || '');
            setPrenom(editedResource.prenom || '');
            setAdresse(editedResource.adresse || '');
        }
    }, [editedResource]);
    console.log(editedResource)
    
    return (
        <div>
            <label htmlFor="">ID</label>
            <input type="text" onChange={(e) => setId(e.target.value)} value={id}/><br />
            <label htmlFor="" >Nom</label>
            <input type="text" onChange={(e) => setId(e.target.value)} value={nom}/><br />
            <label htmlFor="">Prenom</label>
            <input type="text" onChange={(e) => setId(e.target.value)} value={prenom}/><br />
            <label htmlFor="">Adresse</label>
            <input type="text" onChange={(e) => setId(e.target.value)} value={adresse}/><br />
            <button>Modifer</button>

            <hr />

            <input type="text" />
            <button>ENvoyer Message</button>
        </div>
    )
}

export default Edit