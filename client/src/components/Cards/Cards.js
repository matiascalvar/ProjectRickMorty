import React, {useState}from 'react'
import {results} from '/Users/matia/Desktop/Programming/HENRY/ProjectRickMorty/client/src/data/myDB'
import Card from '../Card/Card.js'
import {useParams} from 'react-router-dom'

// renderizar Cards siempre. Luego chequear la url. y en base a eso pasarle el array a itinerar
// Issue : Luego de buscar un nombre no se actualiza el componente cards utilizando un Link
// usar state? Funciona.

export default function Cards (props) {
    let [state] = useState(results)
    let url = useParams()
    // console.log(url.name)
    if(Object.keys(url).length !== 0) {
        // filtrar el personaje y pasarselo abajo
        state = ( results.filter(p => p.name === url.name)) // setState me genera un bucle inf
    }
    console.log('state just before render: ',state)

    return (
        <div className="d-flex justify-content-center" style={{flexWrap: "wrap"}}>
            { state.length !== 0?
                (state.map(
                    p => 
                    <Card
                        image={p.image}
                        name={p.name}
                        id={p.id}
                        key={p.id}
                        species={p.species}
                        status={p.status}
                        gender={p.gender}
                        episode={p.episode}
                    />
                ))
                : <h1>No encontrado.</h1>   
            }
        </div>
    )
}