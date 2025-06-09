import React from 'react'

function Show({nbMessagesC1ToC2, nbMessagesC2ToC1, allMessagesC1, allMessagesC2, deleteMessage}) {
  return (
    <div className='container'>
      <p>
        Le nombre des messages envoyes par C1 vers C2 est : {nbMessagesC1ToC2}
      </p>

      <hr />
      <p>
        Le nombre des messages envoyes par C2 vers C1 est : {nbMessagesC2ToC1}
      </p>

      <hr />
      <p>
        Listes des messages globals: 
      </p>
      <table>
        <thead>
          <tr>
            <th>Num Message</th>
            <th>Sens</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allMessagesC1.map((msg) => (
              <tr key={msg.idMessage}>
                <td>{msg.idMessage}</td>
                <td>{"C1 ---> C2"}</td>
                <td>{msg.message}</td>
                <td><button onClick={() => deleteMessage(msg.idMessage)}>Delete Message</button></td>
              </tr>
            ))
          }
          {
            allMessagesC2.map((msg) => (
              <tr key={msg.idMessage}>
                <td>{msg.idMessage}</td>
                <td>{"C2 ---> C1"}</td>
                <td>{msg.message}</td>
                <td><button onClick={() => deleteMessage(msg.idMessage)}>Delete Message</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Show