import React, { useState } from 'react'

function Saisie({setFiltredDataArray}) {
    const [type, setType] = useState();

    return (
      <div>
        <p>
          Type : 
        </p>
        <input type="text" onChange={(e) => setType(e.target.value)}/>

        <hr />
        <button onClick={() => setFiltredDataArray(type)}>Envoi</button>
      </div>
    )
}

export default Saisie