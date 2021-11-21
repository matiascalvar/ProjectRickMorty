import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Nav () {
    const [personaje, setPersonaje] = useState("")
    function handleChange(e) {
        setPersonaje(e.target.value);
    }

    return (
        <nav>
            <Link to="/">Home</Link>

            <form className="" 
            onSubmit={(e) => {
            e.preventDefault();
            setPersonaje("")
            }}>
                <input 
                className="" 
                placeholder="Ingrese un nombre..."
                onChange={(e) =>handleChange(e)}
                value={personaje}
                />

                <Link to={`/${personaje}`}>
                    <button className="btn btn-primary" type="submit">Buscar</button>
                </Link>
            </form>
        </nav>
    )
}