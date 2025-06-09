import React, {useState, useEffect} from 'react'

function Edit({ele, updateResource}) {
    
    const [nom, setNom] = useState();
    const [prenom, setPrenom] = useState();

    useEffect(()=>{
        setNom(ele?.nom || '');
        setPrenom(ele?.prenom || '');
    }, [ele])
    return (
        
        <div>
            <hr />
            <input type="text"  placeholder='Nom' onChange={(e) => {setNom(e.target.value)}} value={nom}/>
            <input type="text"  placeholder='Prenom' onChange={(e) => setPrenom(e.target.value)} value={prenom}/>

            <button onClick={() => updateResource({id:ele.id, nom:nom, prenom:prenom})}>Modifer</button>
        </div>
    )
}

export default Edit