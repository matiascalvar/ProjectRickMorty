import React from 'react'
import {results} from '/Users/matia/Desktop/Programming/HENRY/ProjectRickMorty/client/src/data/myDB'
import Card from '../Card/Card.js'
import {useParams} from 'react-router-dom'


// renderizar Cards siempre. Luego chequear la url. y en base a eso pasarle el array a itinerar
let array = results
// Issue : Luego de buscar un nombre no se actualiza el componente cards utilizando un Link
// usar state?

export default function Cards (props) {
    let url = useParams()
    // console.log(url.name)
    if(Object.keys(url).length !== 0) {
        // filtrar el personaje y pasarselo abajo
        array = results.filter(p => p.name === url.name)
    }


    return (
        <div className="d-flex justify-content-center" style={{flexWrap: "wrap"}}>
        {
            array.map(
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
                
                )
        }
        </div>
    )
}