import React, {useState} from 'react';
import {Link} from 'react-router-dom'

export default function Nav () {
    const [personaje, setPersonaje] = useState("")
    function handleChange(e) {
        setPersonaje(e.target.value);
    }

    return (
        <nav className="nav bg-light justify-content-between p-2">
            <Link className="navbar-brand" to="/">Home</Link>

            <form className="d-flex" 
            onSubmit={(e) => {
            e.preventDefault();
            setPersonaje("") //it doesn't work 
            }}>
                <input 
                className="form-control" 
                placeholder="Ingrese un nombre..."
                onChange={(e) =>handleChange(e)}
                value={personaje}
                />

                <Link to={`/${personaje}`}>
                    <button className="btn btn-primary" type="submit">Search</button>
                </Link>
            </form>
        </nav>
    )
}