import React from 'react';
import Button from '../Buttons';

import { Container, Hiper } from './styles';

const Sidebar = () => {
  return (
    <Container>
      <ul>
        <Button><Hiper to="/">Home</Hiper></Button>
        <Button><Hiper to="/types">Pokemon types</Hiper></Button>
        <Button><Hiper to="/locations">Locations</Hiper></Button>
      </ul>
    </Container>
  )
}

export default Sidebar;