import React from 'react'
import Evenement from './Evenement'
import expertsData from './data'
import { BrowserRouter as Router ,Routes,Route,Link } from 'react-router-dom'
import Formulaire from './Formulaire'
function App() {
  return (
    <>
    <Router>
<nav>
    <Link to={'/events'} >Evenement</Link>
    <Link to={'/forms'} >Formulaire</Link>
</nav>
        <Routes>
            <Route path='/events' element={<Evenement data={expertsData[0]} /> } />
            <Route path='/forms' element={<Formulaire /> } />
        </Routes>
    </Router>
        
    </>
  )
}

export default App