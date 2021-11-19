import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'


function App() {
  return (
    <div className='App'>
    <Nav/>
      <Routes>
        <Route path="/" element={ <h1>Crear componente para mostrar los primeros 20 chars de la serie</h1> }/>
        
        <Route path="/:name" element={ <h1>Crear componente para mostrar por nombre</h1> }/>
      </Routes>
    </div>
  )
}

export default App
