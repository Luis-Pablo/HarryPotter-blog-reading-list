import React, { useEffect, useState } from 'react';
import Card from './card';



const Characters = () => {
    const [personajes, setPersonajes] = useState([]);

    const obtenerPersonajes = () => {
        fetch('https://hp-api.onrender.com/api/characters')
            .then(res => res.json())
            .then(data => setPersonajes(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        obtenerPersonajes();
        console.log(personajes);
    }, [])
    
    return (
        <div>
            <div>
                {personajes ?
                    personajes.map((personaje) => (
                        <div className='col-md-12'>
                            <Card img={personaje.image}
                                name={personaje.name}
                                house={personaje.house}
                                wood={personaje.wand.wood}
                                core={personaje.wand.core}
                            />
                        </div>
                    )):"Hubo un error o no hay personajes"}
                
            </div>
        </div>
    )
}

export default Characters;