const Card = (props) => {
    return (
        <li className="col-lg-4 col-md-6" key={props.id}>
            <div className="card m-3">
                <div className="card-body">
                    <h3 className="card-title text-center">{props.name}</h3>
                    <h5 className="card-text text-center">{props.specialty}</h5>
                    <h5 className="card-text text-center">{props.location}</h5>
                    <div className='text-center'>
                        <a href="#" className="btn btn-outline-primary">{props.btn}</a>
                    </div>
                </div>

            </div>
        </li>
    )
}

export default Card