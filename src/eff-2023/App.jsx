import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu';
import Calcul_frais from './Calcul_frais';
import Verification from './Verification';
function App() {
    return (
        <>
            <Menu />
                <Routes>
                    <Route path='/calcul' element={<Calcul_frais />} />
                    <Route path='/verif' element={<Verification />} />
                </Routes>
        </>
    )
}

export default App