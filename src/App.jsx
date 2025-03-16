import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'

const App = () => {
  const [robos, setRobos] = useState([])

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( data => setRobos(data))
  }, [])

  return (
    <>
      <CardList robos={robos} />
    </>
  )
}

export default App
