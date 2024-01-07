const Contact = () => {
    return (
        <form>
            <h5>Contacter l'artisan</h5>
            <div className="mb-3 row">
                <div className=" col-lg-6 col-md-6">
                    <label for="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="name" placeholder="Jean Dupont"></input>
                </div>
                <div className=" col-lg-6 col-md-6">
                    <label for="subject" className="form-label">Objet</label>
                    <input type="text" className="form-control" id="subject" placeholder="Objet"></input>
                </div>
            </div>

            <div className="mb-3">
                <label for="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <div className="text-center">
                <button className="btn btn-primary">Envoyer</button>
            </div>
        </form>
    )
}

export default Contact