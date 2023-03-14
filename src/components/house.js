const CardImg = (props) => {
    return (
        <div className="card text-bg-dark" style={{ width: "18rem" }}>
            <img src={props.img} className="card-img" alt="..." />
            <div className="card-img-overlay">
                <h5 className="card-title">{props.name }</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                </div>
        </div>
    )
    
}




const CardHouse= () => {
    return (
        <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
                <CardImg img="https://static.wikia.nocookie.net/esharrypotter/images/a/a3/Gryffindor_Pottermore.png/revision/latest?cb=20140922195249"
                    name="Gryffindor"
                    text="La Casa Gryffindor fue fundada por el célebre mago Godric Gryffindor. Godric sólo aceptaba en su casa a aquellos magos y brujas que tenían valentía, disposición, coraje y caballerosidad, ya que éstas son las cualidades de un auténtico Gryffindor." />
            </div>
            <div className="col">
                <CardImg img="https://static.wikia.nocookie.net/esharrypotter/images/4/42/Hufflepuff_Pottermore.png/revision/latest?cb=20141001131135"
            
                    name="Hufflepuff"
                    text="La Sala Común de Hufflepuff se encuentra en una bodega en el mismo pasillo subterráneo que la cocina. Inicialmente, Hufflepuff buscaba alumnos que simplemente quisieran pertenecer a esa casa, aunque actualmente busca alumnos leales, honestos y que no teman el trabajo pesado. La fundadora es nada menos que la bruja Helga Hufflepuff, amiga desde la infancia de Rowena Ravenclaw. " />
            </div>
            <div className="col">
                <CardImg img="https://static.wikia.nocookie.net/esharrypotter/images/7/76/Ravenclaw_Pottermore.png/revision/latest?cb=20141001130914"
                    name="Ravenclaw"
                    text="La Casa Ravenclaw se encuentra en una torre en el ala oeste del castillo. En la entrada se encuentra una estatua con forma de águila que dice acertijos y sólo te deja entrar si lo resuelves. Ravenclaw busca alumnos creativos, curiosos y que siempre busquen la respuesta." />
            </div>
            <div className="col">
                <CardImg img="https://static.wikia.nocookie.net/esharrypotter/images/6/69/Slytherin_Pottermore.png/revision/latest?cb=20141001130915"
                    name="Slytherin"
                    text="La Casa Slytherin está caracterizada principalmente por la ambición y la astucia. Fue fundada por el mago Salazar Slytherin. La Sala Común está situada en las mazmorras, pasando por un serie de numerosos pasillos subterráneos. Posiblemente se llega a ellos a través del Vestíbulo de Hogwarts . Específicamente se encuentra debajo del Lago Negro, haciendo que la sala común sea fría y con una tonalidad verdosa, ya que hay ventanas que dan a las aguas."/>
            </div>
        </div>
    )
}

export default CardHouse;