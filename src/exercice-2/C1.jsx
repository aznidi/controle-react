import React, { useState } from 'react'

function C1({addNewMessageC1ToC2, allMessagesC2, messageFromC2ToC1}) {
    const [newMessage, setNewMessage] = useState({});
    const [isDisplay, setIsDisplay] = useState('');

    const handleChangrInput = (e) => {
        setNewMessage(e.target.value)
    }
    return (
        <div className='container'>
            <p>
                Le message envoye par C2 est : {messageFromC2ToC1}
            </p>
            <hr />

            <input type="text" onChange={handleChangrInput}/> 
            {" "}
            <button onClick={() => addNewMessageC1ToC2(newMessage)}>
                Envoyer vers C2
            </button>

            <hr />
            <div style={{display:`${isDisplay}`}}>
                <p>
                    Listes des messages de C2 {'->'} C1:
                </p>
                <ul>    
                {allMessagesC2.map((msg) => (
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

export default C1