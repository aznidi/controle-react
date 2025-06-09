import React, { useState } from 'react'

function Add({setMessageFromParent}) {
    const [message, setMessage] = useState();
  return (
    <div className='container'>
        <input type="text"  
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                
        />
        {"  "}
        <button onClick={() => message == null ? alert('Veuillez remplir le champ message') : setMessageFromParent(message)}>
            Envoyer
        </button>
    </div>
  )
}

export default Add