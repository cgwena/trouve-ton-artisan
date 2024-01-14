import { useParams } from 'react-router-dom';

import data from '../datas/datas.json';
import Card from '../components/Card-artisan-detail';
import About from '../components/About';
import Contact from '../components/Contact';

const Details = () => {

    const { artisanId } = useParams()

    const selectedArtisan = data.find(artisan => artisan.id === artisanId)

    return (
        <section className="page">
            <h2>{selectedArtisan.name}</h2>
            <div className="sep1"></div>
            <ul className='row list-card'>
                <Card
                    specialty={selectedArtisan.specialty}
                    location={selectedArtisan.location}
                    website={selectedArtisan.website}
                    note={selectedArtisan.note}
                />
                <About
                    about={selectedArtisan.about} 
                />
            </ul>
            <Contact />
        </section>
    )
}

export default Details