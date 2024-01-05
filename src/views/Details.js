import list from '../datas/datas.json';
import Card from '../components/Card-artisan-detail';
import About from '../components/About';
import Contact from '../components/Contact';

const Details = () => {
    const artisans = list.map(list => {
        return <Card name={list.name} specialty={list.specialty} location={list.location} website={list.website} key={list.id} />
    })

    const about = list.map(list => {
        return <About about={list.about} />
    })

    return (
        <div className="page">
            <h2>Nom artisan</h2>
            <div className="sep1"></div>
            <div className='row list-card'>
                {artisans}
                {about}
            </div>
            <h5>Contacter l'artisan</h5>
            <Contact />
        </div>
    )
}

export default Details