import { useParams } from 'react-router-dom';
import data from '../datas/datas.json';
import Card from '../components/Card-artisan';

const Category = () => {
  const { artisanCategory } = useParams()

  const selectedArtisans = data.filter(artisan => artisan.category === artisanCategory)

  const artisans = selectedArtisans.map(artisan => {
    return <Card
      name={artisan.name}
      specialty={artisan.specialty}
      location={artisan.location}
      btn="En savoir plus"
      key={artisan.id}
      id={artisan.id}
      note={artisan.note}/>
  })
  return (
    <section className="page">
      <h1>Les artisans de la région dans la catégorie {artisanCategory}</h1>
      <div className="sep1"></div>
      <div className='row list-card'>
          {artisans}
      </div>
    </section>
  )
}

export default Category