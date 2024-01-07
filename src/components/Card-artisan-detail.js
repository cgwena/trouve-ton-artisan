import Rating from "./Star-rating"

const Card = (props) => {
    return (
        <li className="col-lg-6 col-md-6" key={props.id}>
            <div className="card m-3">
                <div className="card-body">
                    <h3 className="card-title text-center">{props.name}</h3>
                    <Rating note={props.note} />
                    <h5 className="card-text text-center">{props.specialty}</h5>
                    <h5 className="card-text text-center">{props.location}</h5>
                    <div className="card-text text-center"><a href={props.website} target="_blank" rel="noreferrer">{props.website}</a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card