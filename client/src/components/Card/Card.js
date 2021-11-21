import React from 'react'
import styles from '../Card/Card.module.css'
import {useParams} from 'react-router-dom'
import {results} from '/Users/matia/Desktop/Programming/HENRY/ProjectRickMorty/client/src/data/myDB'

export default function Card ({match, id, name, status, species, gender, image, episode}) {
    // console.log("match.param.name",match)
    // let test = useParams()
    // console.log('param.name :',test.name)
    // console.log(Object.keys(test).length === 0)
    // if(Object.keys(test).length !== 0) {results.filter(p => p.name === test.name)}

    return (
        // (Object.keys(test).length === 0)?
        <div key={id} className="card p-2 m-2">
            <div className="d-flex">
                <img className="img-thumbnail" style={{ width: "12rem" }} src={image} alt=" "/>
                <div className="text-start">
                    <h1 className="">{name}</h1>
                    <h3>{species}</h3>
                </div>
              
            </div>
            
            <div className="text-start">
                <span className={styles.dot}></span> <span>  {status}</span>
                <p>{gender}</p>
                {/* <p>Episodes: {episode.map(e => e + " ")}</p> */}
            </div>
        </div>
        // : <h1>Vacio</h1>
    )
}