import React from 'react'
import styles from '../Card/Card.module.css'

export default function Card ({id, name, status, species, gender, image, episode}) {
    // console.log("key: ",id)
    return (
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
                <p>Episodes: {episode.map(e => e + " ")}</p>
            </div>
        </div>
    )
}