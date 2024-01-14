import Rating from "./Star-rating"

const Card = (props) => {
    return (
        <li className="col-lg-6 col-md-6" key={props.id}>
            <div className="card m-3">
                <div className="card-body">
                    <div className='text-center'>
                        <Rating note={props.note} />
                    </div>
                    <h4 className="card-text text-center">{props.specialty}</h4>
                    <h4 className="card-text text-center">{props.location}</h4>
                    <div className="card-text text-center"><a href={props.website} target="_blank" rel="noreferrer">{props.website}</a>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card