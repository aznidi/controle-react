import React, { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            try
            {
                const response = await axios.get('http://localhost:5000');
                setData(response.data);
            }catch(error)
            {
                console.log('Error fetching data', error)
            }
            
        }
        fetchData()
    }, [])
    return (
        <>
        {
            !data ? 
                <p>{'Loading ... '}</p>
            :
                <div className=''>
                    <p>
                        La Listes des utilisateurs : 

                    </p>

                    <ul>
                        {
                            data.map((user) => <li key={user.id}>{user.nom}, {user.prenom}</li>)
                        }
                    </ul>
                </div>
        }
        </>
        
    )
}

export default App