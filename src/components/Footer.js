const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container">
                <div>
                    <address>
                        <h2>Lyon</h2>
                        <i className="fa-solid fa-location-dot"></i>
                        <p>101 Cours Charlemagne</p>
                        <p>CS 20033</p>
                        <p>69269 LYON CEDEX 02</p>
                        <p>FRANCE</p>
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:04 26 73 4000"> +33 (0)4 26 73 4000</a>
                    </address>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-between">
                    <a>Mentions légales</a>
                    <a>Données personnelles</a>
                    <a>Accessibilité : conforme</a>
                    <a>Presse</a>
                    <a>Marchés publics</a>
                    <a>Venir à la région</a>
                    <a>Contacts</a>
                    <a>Gestions des cookies</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer