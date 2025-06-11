import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

function Calcul_frais() {
    const [result, setResult] = useState(null);
    const [mvb, setMvb] = useState(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        if(!mvb) return;

        const droit_enregistrement = mvb * (4 / 100);
        const conservation_fonciere = mvb * (1.5 / 100) + 100 + 100;
        const frais_dossier = 1500;

        let honoraires = 0
        if(mvb < 300000){
            honoraires = 4000;
        }else if(mvb >= 300000 && mvb < 1000000){
            honoraires = mvb * (1.5 / 100);
        }else if(mvb >= 1000000 && mvb < 5000000){
            honoraires = mvb * (1.25 / 100);
        }else if(mvb >= 5000000 && mvb < 10000000){
            honoraires = mvb * (0.75 / 100);
        }else{
            honoraires = mvb * (0.5 / 100);
        }
        const tva = honoraires * (10 / 100);

        setResult({
            total: droit_enregistrement + conservation_fonciere + frais_dossier + honoraires + tva,
            droit_enregistrement,
            conservation_fonciere,
            frais_dossier,
            honoraires,
            tva
        })
        dispatch()
    }
    return (
        <div>
            <fieldset>
                <legend>Calcul de montant</legend>
                <div>
                    <label htmlFor="mvb">MVB</label>
                    <input type="number" name='mvb' id='mvb' onChange={(e) => setMvb(e.target.value)}/>
                    <button onClick={handleClick}>Calculer</button>

<br />

                    
                    {
                        result && (
                            <>
                                Droits d'enregistrement (4% de prix de vente):  { result.droit_enregistrement }
                                <br />
                                Conservation foncière (1,5% du prix de vente + 200 DH):  { result.conservation_fonciere }
                                <br />
                                Frais de dossler (timbres, copies...):  { result.frais_dossier }
                                <br />
                                honoraires du notaire (1,25% du prix de vente dans ce cas):   { result.honoraires }
                                <br />
                                TVA sur les honoraires du notaire (10%):  { result.tva }
                                <br />
                                TOTAL =  { result.total }
                                <br />

                            </>
                        )
                    }
                </div>
            </fieldset>
        </div>
    )
}

export default Calcul_frais