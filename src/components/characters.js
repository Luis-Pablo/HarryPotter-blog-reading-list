import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



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
        
    }, [])
    
    return (
        <div>
            <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                {personajes ?
                    personajes.map((personaje) => (
                        <div key={personaje.id} className='col-md-12' >
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
const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name }</h5>
                <p className="card-text">Casa: {props.house }</p>
                <p class="card-text">{props.student}</p>
            </div>
            <div className="card-body">
            <Link to={"/description/" + props.id} className="btn btn-secondary shadow-sm">Ver más...</Link>

                
            </div>
        </div>
    )
}


export default Characters;