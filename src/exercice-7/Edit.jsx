import React, { useEffect, useState } from 'react'

function Edit({editedResourceVariable, modifyNewResource}) {
    
    const [type, setType] = useState();
    const [nom, setNom] = useState();


    useEffect(() => {
        setType(editedResourceVariable?.type || '')
        setNom(editedResourceVariable?.nom || '')
    }, [editedResourceVariable.type])
    return (
        <div>
            <input type="text" value={type} onChange={(e) => setType(e.target.value)}/><br />
            <input type="text" value={nom} readOnly/><br />
            <button onClick={() => modifyNewResource({nom: nom, type: type})}>Sauvgarder</button>
        </div>
    )
}

export default Edit