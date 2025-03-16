import Card from "../card/card.component"
import './card-list.styles.css'

const CardList = ({ robos }) => {
  return (
    <div className="card-list-container ">
      {
        robos.map(({id, email, name}) => 
        <Card
          key={id}
          id={id}
          email={email}
          name={name}
        /> )
      }
    </div>
  )
}

export default CardList