const Header = () => {
    return (
        // <nav>
        //     <img className="logo" src="Logo.png" alt="logo de 'trouve ton artisan'"></img>
        //     <ol>
        //         <li className="regular">element regular</li>
        //         <li className="bold">element bold</li>
        //     </ol>
        // </nav>

        <nav class="navbar navbar-expand-lg bg-white shadow">
            <div class="container-fluid">
                <a className="navbar-brand logo" href="#"><img src="Logo.png"></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse d-flex flex-column align-items-end" id="navbarNav">
                    <form class="d-flex border-bottom border-end" role="search">
                        <input class="form-control me-2 border-0" type="search" placeholder="Recherche" aria-label="Search"></input>
                        <button class="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <ul class="navbar-nav d-flex justify-content-around">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Bâtiment</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fabrication</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Alimentation</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header