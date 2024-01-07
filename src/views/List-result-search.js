import { useParams } from 'react-router-dom';

import list from '../datas/datas.json';
import Card from '../components/Card-artisan';

const List = () => {

  const { artisanCategory } = useParams()
  
  const selectedArtisans = list.filter(artisan => artisan.category === artisanCategory)

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
    <div className="page">
      <h1>Les artisans de la région dans la catégorie {artisanCategory}</h1>
      <div className="sep1"></div>
      <div className='row list-card'>
          {artisans}
      </div>
    </div>
  )
}

export default List