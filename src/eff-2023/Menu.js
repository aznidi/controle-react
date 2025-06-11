import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
  return (
    <div>
        <Link to='calcul' >Calcul</Link>
        <Link to='verif' >Verification</Link>
    </div>
  )
}

export default Menu