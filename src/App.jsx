import { useState, useEffect } from 'react'
import './App.css'
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

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

  const onSearchChange = event => {
    const searchString = event.target.value.toLocaleLowerCase()
    const newFilteredRobos = robos.filter( robo =>
      robo.name.toLowerCase().includes(searchString)
    )
    setFilteredRobos(newFilteredRobos)
  }

  return (
    <div className='app-container'>
      <h1 className='app-title'>RoboRoster</h1>
      <SearchBox onChangeHandler={onSearchChange} />
      <CardList robos={filteredRobos} />
    </div>
  )
}

export default App
