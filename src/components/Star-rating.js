const Rating = ({ note }) => {
    const fullStars = Array(5).fill(<i className="fa-solid fa-star"></i>);
    const emptyStars = Array(5).fill(<i className="fa-regular fa-star"></i>);

    const parsedNote = parseFloat(note)

    const fullStarsCount = fullStars.slice(5 - Math.floor(parsedNote))
    const emptyStarsCount = emptyStars.slice(Math.floor(parsedNote))
    
    return (
        <div>
            {fullStarsCount.map(fullStarsCount => (
                <span>{fullStarsCount}</span>
            ))}
            {emptyStarsCount.map(emptyStarsCount => (
                <span>{emptyStarsCount}</span>
            ))}
        </div>
    );
}

export default Rating