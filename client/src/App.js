import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.js'
import Cards from './components/Cards/Cards.js'
import Card from './components/Card/Card.js'
function App() {
  function onSearch(personaje) {
    console.log(personaje)
  }

  return (
    <div className='App'>
    <Nav  onSearch={onSearch}/>
      <Routes>
        <Route path="/" element={ <Cards/> }/>
        
        <Route path="/:name" render={(match) => ( 
        <Card
          match={match}
        />)}/>
      </Routes>
    </div>
  )
}

export default App
