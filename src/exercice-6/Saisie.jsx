import React, { useState } from 'react'

function Saisie({filterDataWithType}) {
    const [type, setType] = useState();
    return (
        <div>
            <input type="text" onChange={(e) => setType(e.target.value)}/>
            {" "}
            <button onClick={() => filterDataWithType(type)}>
                Recherche
            </button>
        </div>
    )
}

export default Saisie