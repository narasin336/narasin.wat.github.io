import React, { useState } from 'react'
import axios from 'axios'
import DisplayPokemon from './DisplayPokemon'

function Search() {
    
    const [pokemon, setPokemon] = useState("")
    const [result, setResult] = useState("")


    const fetchPokemon = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        setResult(res)
        console.log(res)
    }
    console.log(pokemon)

    return (
        <div>
            <input type="text" placeholder='Search your pokemon' onChange={(e) => setPokemon(e.target.value)}/>
            <input type="submit" value='Search' onClick={fetchPokemon}/>
            {result ? (
                <DisplayPokemon result={result} />
            ): (
                <p>No pokemon was found!</p>
            )}

        </div>
 )  
}

export default Search