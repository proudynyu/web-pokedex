import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=> {
    api.get('pokemon/?offset=0&limit=964')
      .then(resp => {
        setPokemons(resp.data.results)
      })
  }, []);

  console.log(pokemons);

  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}

export default Pokemon;