import React, {useState} from 'react';

export default function Nav ({onSearch}) {
    const [personaje, setPersonaje] = useState("")
    function handleChange(e) {
        setPersonaje(e.target.value);
    }

    return (
        <nav>
            <form className="" 
            onSubmit={(e) => {
            e.preventDefault();
            onSearch(personaje)
            setPersonaje("")  
            }}>
                <input 
                className="" 
                placeholder="Ingrese un nombre..."
                onChange={handleChange}
                value={personaje}
                />
                <button className="btn btn-primary" type="submit">Buscar</button>
            </form>
        </nav>
    )
}