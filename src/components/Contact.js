const Contact = (props) => {
    return (
        <form>
            <div class="mb-3">
                <label for="name" class="form-label">Nom</label>
                <input type="email" class="form-control" id="name" placeholder="name@example.com"></input>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea class="form-control" id="message" rows="3"></textarea>
            </div>
        </form>
    )
}

export default Contact