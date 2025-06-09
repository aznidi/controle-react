import React from 'react'
import { useState } from 'react';

function C2({addNewMessageC2ToC1, allMessagesC1, messageFromC1ToC2}) {

    const [newMessage, setNewMessage] = useState({});
    const [isDisplay, setIsDisplay] = useState('');

    const handleChangrInput = (e) => {
        setNewMessage(e.target.value)
    }
    
  return (
    <div className='container'>
            <p>
                Le message envoye par C2 est : {messageFromC1ToC2}
            </p>
            <hr />

            <input type="text" onChange={handleChangrInput}/> 
            {" "}
            <button onClick={() => addNewMessageC2ToC1(newMessage)}>
                Envoyer vers C2
            </button>

            <hr />
            <div style={{display:`${isDisplay}`}}>
                <p>
                    Listes des messages de C2 {'->'} C1:
                </p>
                <ul>    
                {allMessagesC1.map((msg) => (
                    <div key={msg.idMessage}>
                        ID: {msg.idMessage}, Message: {msg.message}
                    </div>
                ))}

                </ul>
                
            </div>
            <button onClick={() => {isDisplay == '' ? setIsDisplay('none') : setIsDisplay('')}}>
                {isDisplay == '' ? 'Cacher Historiques' : 'Afficher Historiques'}
            </button>
        </div>
  )
}

export default C2