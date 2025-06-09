import React, { use, useState } from 'react'
import C1 from './C1'
import C2 from './C2'
import Show from './Show'
let ID = 0;
function App() {
    const [messageFromC1ToC2, setMessageFromC1ToC2] = useState();
    const [messageFromC2ToC1, setMessageFromC2ToC1] = useState();
    const [allMessagesC1, setAllMessagesC1] = useState([]);
    const [allMessagesC2, setAllMessagesC2] = useState([]);
    const [allMessages, setAllMessages] = useState([])

    const addNewMessageC1ToC2 = (message) => {
        const newMessage = { idMessage: ++ID, message}
        setAllMessages([...allMessages, newMessage]);
        setAllMessagesC1([...allMessagesC1, newMessage]);
        setMessageFromC1ToC2(message)
    };
    const addNewMessageC2ToC1 = (message) => {
        const newMessage = { idMessage: ++ID, message}
        setAllMessages([...allMessages, newMessage]);
        setAllMessagesC2([...allMessagesC2, newMessage]);
        setMessageFromC2ToC1(message)
    };


    const deleteMessage = (idMessage) => {
        setAllMessages(allMessages.filter((msg) => msg.idMessage != idMessage))
        setAllMessagesC1(allMessagesC1.filter((msg) => msg.idMessage != idMessage))
        setAllMessagesC2(allMessagesC2.filter((msg) => msg.idMessage != idMessage))
    }

    return (
        <>
        
            <fieldset>
                <legend>Composant C1</legend>
                <C1 addNewMessageC1ToC2={addNewMessageC1ToC2} allMessagesC2={allMessagesC2} 
                messageFromC2ToC1={messageFromC2ToC1}/>
            </fieldset>

            
            <fieldset>
                <legend>Composant C2</legend>
                <C2 addNewMessageC2ToC1={addNewMessageC2ToC1} allMessagesC1={allMessagesC1} 
                    messageFromC1ToC2={messageFromC1ToC2}/>
            </fieldset>

            
            <fieldset>
                <legend>Composant Affichage</legend>
                <Show nbMessagesC1ToC2={setAllMessagesC1.length}
                 nbMessagesC2ToC1={setAllMessagesC2.length} 
                 allMessagesC1={allMessagesC1}
                 allMessagesC2={allMessagesC2}
                 deleteMessage={deleteMessage}/>
            </fieldset>
        </>
    )
}

export default App