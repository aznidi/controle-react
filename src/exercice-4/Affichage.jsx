import React, { useState } from 'react'

function Affichage({ filtredData, searchedTerm, isNewSearch, setNewSearch }) {

    const [isDisplay, setIsDisplay] = useState('none');
    return (
      <div>
        <hr />
        <h3>
            Le terme recherchee est {searchedTerm}
        </h3>
        

        <hr />
        
        <button onClick={() => isDisplay === 'none' ? setIsDisplay('') : setIsDisplay('none')} >
            Rechercher
        </button>

        <ul style={{display: isNewSearch ? isDisplay : 'none'}}>
          {
            filtredData.map((fruit, index) => <li key={index}>{fruit.nom}</li>)
          }
        </ul>
      </div>
    )
}

export default Affichage