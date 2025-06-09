import React, { useState } from 'react'

function Saisie({filtreDataWithType}) {
    const [type, setType] = useState();
    return (
        <div>
            <input type="text" 
                onChange={(e) => {setType(e.target.value)}}
            />
            <button 
                onClick={() => filtreDataWithType(type)}
                >Rechercher</button>
        </div>
    )
}

export default Saisie