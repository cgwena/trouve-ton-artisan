import list from '../datas/datas.json';
import Card from '../components/Card-artisan';

const List = () => {

  const artisans = list.map(list => {
    return <Card name={list.name} specialty={list.specialty} location={list.location} btn="En savoir plus" key={list.id} />
  })
  return (
    <div className="page">
      <h1>Les artisans de la région</h1>
      <div className="sep1"></div>
      <div className='row list-card'>
          {artisans}
      </div>
    </div>
  )
}

export default List