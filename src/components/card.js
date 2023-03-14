const Card = (props) => {
    return (
        <div className="card" style={{ width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name }</h5>
                <p className="card-text">{props.casa }</p>
            </div>
            <div className="card-body">
                <p class="card-text">{props.wood}" "{props.core }</p>
                <p class="card-text">{props.estudiante}</p>
                
            </div>
        </div>
    )
}

export default Card;