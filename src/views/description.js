import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Descriptions = () => {
  
    const [personajes, setpersonajes] = useState([]);
    const {id} = useParams();
    const url = `https://hp-api.onrender.com/api/characters/${id}`
    const obtenerpersonajes = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => setpersonajes(data))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        obtenerpersonajes();
        
    }, [])
    
    return (
        <div>
            <div className="row row-cols-1 row-cols-lg-4 align-items-stretch g-4 py-5">
                {
                    personajes.map((personaje) => (
                        <div key={personaje.id} className='col-md-12'>
                            <Description  img={personaje.image}
                                name={personaje.name}
                                house={personaje.house}
                                student={personaje.hogwartsStudent ?" Estudia en Hogwarts ": personaje.hogwartsStaff?  "Trabaja en Hogwarts": "Oficio desconocido"}
                                wand={personaje.wand.wood ? personaje.wand.wood: "Desconocido"}
                                wandCore={personaje.wand.core ? personaje.wand.core: "Desconocido"}
                                nickName={personaje.alternate_names? personaje.alternate_names: "Desconocido"}
                                eyeColour={personaje.eyeColour ? personaje.eyeColour: "Desconocido" }
                                hairColour={personaje.hairColour? personaje.hairColour: "Desconocido"}
                            />
                        </div>
                    ))}
                
            </div>
        </div>
    )
}
//"wand":{"wood":"holly","core":"phoenix feather" half-blood","eyeColour":"green","hairColour
export default Descriptions;


const Description = (props) => {
        <div className="card mb-3" style="max-width: 540px;">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.img} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.img}</p>
                    <p className="card-text">{props.house}</p>
                    <p className="card-text">{props.student}</p>
                    <p className="card-text">{props.wand} {props.wandCore}</p>
                    <p className="card-text">{props.nickName}</p>
                    <p className="card-text">{props.hairColour}</p>
                    <p className="card-text">{props.eyeColour}</p>
                </div>
                </div>
            </div>
        </div>
}