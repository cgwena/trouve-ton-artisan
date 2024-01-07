const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container">
                <div>
                    <address>
                        <h2>Lyon</h2>
                        <div className="d-flex">
                            <i className="fa-solid fa-location-dot"></i>
                            <div className="address">
                                <p>101 Cours Charlemagne</p>
                                <p>CS 20033</p>
                                <p>69269 LYON CEDEX 02</p>
                                <p>FRANCE</p></div>
                        </div>
                        
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:04 26 73 4000"> +33 (0)4 26 73 4000</a>
                    </address>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-between">
                    <a href="#">Mentions légales</a>
                    <a href="#">Données personnelles</a>
                    <a href="#">Accessibilité : conforme</a>
                    <a href="#">Presse</a>
                    <a href="#">Marchés publics</a>
                    <a href="#">Venir à la région</a>
                    <a href="#">Contacts</a>
                    <a href="#">Gestions des cookies</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer