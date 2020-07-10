import React from 'react';
import Button from '../Buttons';

import { FaHome, FaDragon, FaLocationArrow, FaGamepad, FaGhost, FaCarAlt } from 'react-icons/fa'

import { Container, Hiper } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <ul>
        <Button><Hiper to="/"><span><FaHome size={15} /></span>Home</Hiper></Button>
        <Button><Hiper to="/types"><span><FaDragon size={15} /></span>Pokemon types</Hiper></Button>
        <Button><Hiper to="/pokemon"><span><FaGhost size={15} /></span>Pokemons</Hiper></Button>
        <Button><Hiper to="#"><span><FaGamepad size={15} /></span>Generations</Hiper></Button>
        <Button><Hiper to="/locations"><span><FaLocationArrow size={15} /></span>Locations</Hiper></Button>
        <Button><Hiper to="#"><span><FaCarAlt size={15} /></span>Regions</Hiper></Button>
        <Button><Hiper to="#"><span></span>Species</Hiper></Button>
        <Button><Hiper to="#"><span></span>Moves</Hiper></Button>
        <Button><Hiper to="#"><span></span>Abilities</Hiper></Button>
      </ul>
    </Container>
  )
}

export default Sidebar;