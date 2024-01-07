import list from '../datas/datas.json';
import Card from '../components/Card-artisan';

const Home = () => {
    const topArtisans = list.filter(artisan => artisan.top);

    const artisans = topArtisans.map(artisan => {
        return <Card
            name={artisan.name}
            specialty={artisan.specialty}
            location={artisan.location}
            btn="En savoir plus"
            key={artisan.id}
            id={artisan.id}
            note={artisan.note} />
    })

    return (
        <div className="page">
            <h1>Les artisans de la région</h1>
            <div className="sep1"></div>
            <div>
                <h2>Comment trouver mon artisan ?</h2>
                <ol>
                    <li>Choisir la catégorie d’artisanat dans le menu.</li>
                    <li>Choisir un artisan.</li>
                    <li>Le contacter via le formulaire de contact.</li>
                    <li>Une réponse sera apportée
                    sous 48h.</li>
                </ol>
            </div>
            <div className="sep2"></div>
            <h2>Les artisans du mois</h2>
            <div className='row list-card'>
                {artisans}
            </div>
        </div>
    )

    
}

export default Home
