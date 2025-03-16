import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'

const App = () => {
  const [robos, setRobos] = useState([])
  const [filteredRobos, setFilteredRobos] = useState([])

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json())
      .then( data => {
        setRobos(data)
        setFilteredRobos(data)
      })
  }, [])

  return (
    <>
      <input type='search' onChange={ event => {
        const searchString = event.target.value.toLocaleLowerCase()
        const newFilteredRobos = robos.filter( robo =>
          robo.name.toLowerCase().includes(searchString)
        )
        setFilteredRobos(newFilteredRobos)
      }} />

      <CardList robos={filteredRobos} />
    </>
  )
}

export default App
