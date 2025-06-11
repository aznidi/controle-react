import React, { useState } from 'react'

function Formulaire() {
    // const [theme,setTheme]=useState()
    // const [dateD,setDateD]=useState()
    // const [dateF,setDateF]=useState()
    // const [theme,setTheme]=useState()
    // const [theme,setTheme]=useState()
    const [forms,setForme]=useState({
        theme: '',
        date_debut: null,
        date_fin: null,
        cout_journalier: null,
        expert: ''
    });
    const [show,setShow]=useState(true)

    const handleChange = (e) => {
        const formName = e.target.name;
        const value = e.target.value;

        setForme({
            ...forms,
            [formName]: value
        });

    }
  return (
    <div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
        theme: <input type="text" name='theme' onChange={(e) => handleChange(e)}/>
        date debut<input name='date_debut' onChange={(e) => handleChange(e)} type="date" />
        date Fin<input name='date_fin' onChange={(e) => handleChange(e)} type="date" />
        cout<input name='cout_journalier'  onChange={(e) => handleChange(e)} type="number" />
        expert<input name='expert' onChange={(e) => handleChange(e)} type="text" />
        <button type="submit" onClick={()=>setShow(false)} > confirmer</button>
        </form>
        <div style={{display:show?"none":"block"}}>
            {forms.theme + ' ' + forms.date_debut+ ' ' +  forms.date_fin+ ' ' +  forms.cout_journalier + ' ' + forms.expert}
        </div>
    </div>
  )
}

export default Formulaire