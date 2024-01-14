import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import DOMPurify from 'dompurify'


const Contact = () => {
    const captchaRef = useRef(null)
    const form = useRef();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const token = captchaRef.current.getValue();
        const name = DOMPurify.sanitize(form.current.name.value);
        const subject = DOMPurify.sanitize(form.current.subject.value);
        const message = DOMPurify.sanitize(form.current.message.value);
        
        captchaRef.current.reset();
        setIsFormSubmitted(true)
        form.current.name.value = ""
        form.current.subject.value = ""
        form.current.message.value = ""
    };

    return (
        <form className="mb-3" onSubmit={handleSubmit} ref={form}>
            <h5>Contacter l'artisan</h5>
            <div className="mb-3 row">
                <div className=" col-lg-6 col-md-6">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="name" name="name" placeholder="Jean Dupont" required></input>
                </div>
                <div className=" col-lg-6 col-md-6">
                    <label htmlFor="subject" className="form-label">Objet</label>
                    <input type="text" className="form-control" id="subject" name="subject" placeholder="Objet" required></input>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" name="message" rows="3" required></textarea>
            </div>
            <ReCAPTCHA
                sitekey={process.env.REACT_APP_SITE_KEY}
                ref={captchaRef}/>
            {!isFormSubmitted &&
                <div className="text-center">
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </div>}
            {isFormSubmitted && 
                <div>
                    <h2 className="text-center">Message envoyé !</h2>
                </div>}
        </form>
    )
}

export default Contact