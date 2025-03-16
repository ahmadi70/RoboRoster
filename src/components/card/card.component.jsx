import './card.styles.css'

const Card = ({id, email, name}) => {
  return <div className='card-container'>
    <img src={`https://robohash.org/${id}`} />
    <h2>{ name }</h2>
    <p>{ email }</p>
  </div>
}

export default Card