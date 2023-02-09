import React from 'react'

function DisplayPokemon({ result }) {
  return (
    <div>
        <h3>{result.data.name}</h3>
        <img src={result.data.sprites.front_default}/>
        <p>Base Experiece: {result.data.base}</p>
        <p>Height: {result.data.base_experience}, Weight: {result.data.weight}</p>
        <p>Abilities</p>
        <ul>
            {result.data.abilities.map((val, idx) => (
                <li key={idx}>
                    {val.ability.name}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default DisplayPokemon