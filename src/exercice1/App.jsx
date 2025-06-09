import React, { useState } from 'react'
import Add from './Add'
import Show from './Show'
import DeleteAll from './DeleteAll'

function App() {
    const [allMessages, setAllMessages] = useState([]);
    const setMessageFromParent = (messageFromChild) => {addNewMessage(messageFromChild)}  

    const addNewMessage = (message) => {
        setAllMessages(
            [...allMessages, message]
        );
    }
    

    const resetArrayMessages = (argument) => setAllMessages(argument);
    return (
        <>
            <fieldset>
                <legend>Ajouter un message :</legend>
                <Add setMessageFromParent={setMessageFromParent}/>
            </fieldset>

            <fieldset>
                <legend>Listes des messages :</legend>
                <Show allMessages={allMessages} />
                
            </fieldset>

            <fieldset>
                <legend>Total des messages / supprimer tous les messages :</legend>
                <DeleteAll totalMessages={allMessages.length} allMessages={allMessages} resetArrayMessages={resetArrayMessages} />
            </fieldset>
        </>
    )
}

export default App