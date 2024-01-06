import { Link } from 'react-router-dom';


const Card = (props) => {
    return (
        <li className="col-lg-4 col-md-6" key={props.id}>
            <div className="card m-3">
                <div className="card-body">
                    <h3 className="card-title text-center">{props.name}</h3>
                    <h5 className="card-text text-center">{props.specialty}</h5>
                    <h5 className="card-text text-center">{props.location}</h5>
                    <Link to={`/details/${props.id}`} className="btn btn-outline-primary">
                        {props.btn}
                    </Link>
                </div>

            </div>
        </li>
    )
}

export default Card
