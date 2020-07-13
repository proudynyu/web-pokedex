import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { PokeContainer } from './styles';
import axios from 'axios';

const Sprite = ({ url, name }) => {
  const history = useHistory();
  const [sprite, setSprite] = useState('');

  axios.get(url)
    .then(resp => {
      const data = resp.data;
      const sprites = data.sprites;
      setSprite(sprites.front_default);
    });

  function handleClick() {
    history.push(`/pokemon/${name}`);
  }
  return(
    <PokeContainer onClick={handleClick}>
      <img src={sprite} alt={`img of ${name}`}/>
      <h1>{name}</h1>
    </PokeContainer>
  )
}

export default Sprite;