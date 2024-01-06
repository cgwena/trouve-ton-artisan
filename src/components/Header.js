import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Header = ({onSearch}) => {
    const [searchValue, setSearchValue] = useState("")
    const navigate = useNavigate()

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(searchValue);
        console.log("Search submitted:", searchValue);
        navigate("/results")
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white shadow">
            <div className="container-fluid">
                <a className="navbar-brand logo" href="/"><img src="Logo.png"></img></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex flex-column align-items-end" id="navbarNav">
                    <form className="d-flex border-bottom border-end" role="search" onSubmit={handleSubmit}>
                        <input className="form-control me-2 border-0" type="search" placeholder="Recherche" aria-label="Search" onChange={handleSearchChange}></input>
                        <button className="btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                    <ul className="navbar-nav d-flex justify-content-around">
                        <li className="nav-item">
                            <Link to={"/Bâtiment"} className="nav-link active" aria-current="page">Bâtiment</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Services"} className="nav-link">Service</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Fabrication"} className="nav-link">Fabrication</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/Alimentation"} className="nav-link">Alimentation</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
