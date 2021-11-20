import React from 'react'
import {results} from '/Users/matia/Desktop/Programming/HENRY/ProjectRickMorty/client/src/data/myDB'
import Card from '../Card/Card.js'

export default function Cards (props) {
    return (
        <div className="d-flex justify-content-center" style={{flexWrap: "wrap"}}>
        {
            results.map(
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