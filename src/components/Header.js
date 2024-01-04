const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white shadow">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="#"><img src="Logo.png"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-column align-items-end" id="navbarNav">
                    <form className="d-flex border-bottom border-end" role="search">
                        <input className="form-control me-2 border-0" type="search" placeholder="Recherche" aria-label="Search"></input>
                        <button className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <ul className="navbar-nav d-flex justify-content-around">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Bâtiment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Fabrication</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Alimentation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header