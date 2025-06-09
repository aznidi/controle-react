import React from 'react'

function Show({allMessages}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            {
                allMessages.map((message, index) => <tr key={index}><td key={index}>{message}</td></tr>)
            }
        </tbody>
    </table>
  )
}

export default Show