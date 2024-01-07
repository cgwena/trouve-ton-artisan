import Card from "../components/Card-artisan"

const Results = ({ data, searchTerm }) => {
    const results = data.filter(artisan => artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) || artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artisan.location.toLowerCase().includes(searchTerm.toLowerCase()))
    const artisans = results.map(artisan => {
        return <Card
            name={artisan.name}
            specialty={artisan.specialty}
            location={artisan.location}
            btn="En savoir plus"
            key={artisan.id}
            id={artisan.id}
            note={artisan.note } />
    })
    return (
        <div className="page">
            <h1>Le résultat de votre recherche</h1>
            <div className="sep1"></div>
            <div className='row list-card'>
                {artisans}
            </div>
       </div>
    )
}

export default Results