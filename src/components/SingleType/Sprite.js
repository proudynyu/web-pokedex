import React, { useState } from 'react';
import { PokeContainer } from './styles';
import axios from 'axios';

const Sprite = ({ url, name }) => {
  const [sprite, setSprite] = useState('');
  const [loading, setLoading] = useState(false);

  axios.get(url)
    .then(resp => {
      setLoading(true);
      const data = resp.data;
      const sprites = data.sprites;
      setSprite(sprites.front_default);
    });

  return(
    <PokeContainer>
      <img src={sprite} alt={`img of ${name}`}/>
      <h1>{name}</h1>
    </PokeContainer>
  )
}

export default Sprite;