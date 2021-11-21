import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav.js'
import Cards from './components/Cards/Cards.js'

function App() {

  return (
    <div className='App'>
    <Nav/>
      <Routes>
        <Route path="/" element={ <Cards/> }/>
        
        <Route path="/:name" element={ <Cards/>}/>

      </Routes>
    </div>
  )
}

export default App
