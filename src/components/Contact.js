import { useRef } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import DOMPurify from 'dompurify';

const Contact = () => {
    const captchaRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        const name = DOMPurify.sanitize(e.target.elements.name.value);
        const subject = DOMPurify.sanitize(e.target.elements.subject.value);
        const message = DOMPurify.sanitize(e.target.elements.message.value);

        // Effectuez le traitement des données ici
        console.log("Nom:", name);
        console.log("Objet:", subject);
        console.log("Message:", message);
        console.log("Token:", token);
        captchaRef.current.reset();
        
    }

    return (
        <form method="post" onSubmit={handleSubmit}>
            <h5>Contacter l'artisan</h5>
            <div className="mb-3 row">
                <div className=" col-lg-6 col-md-6">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="name" placeholder="Jean Dupont" required></input>
                </div>
                <div className=" col-lg-6 col-md-6">
                    <label htmlFor="subject" className="form-label">Objet</label>
                    <input type="text" className="form-control" id="subject" placeholder="Objet" required></input>
                </div>
            </div>

            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="3" required></textarea>
            </div>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}/>
            <div className="text-center">
                <button className="btn btn-primary">Envoyer</button>
            </div>
        </form>
    )
}

export default Contact