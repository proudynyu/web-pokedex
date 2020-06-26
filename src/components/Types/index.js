import React, {  useState, useEffect } from 'react';
import { Container, Header, Title, Grid, TileType } from './styles';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

const Types = () => {
  const history = useHistory();
  const [types, setTypes] = useState([]);
  const [countTypes, setCountTypes] = useState(0);

  useEffect(() => {
    api.get('type')
      .then( resp => {
        const data = resp.data;
        const typeNames = data.results.map( type => type.name ); 
        setTypes(typeNames);
        setCountTypes(typeNames.length);
      })
      .catch( err => console.log(err))
  }, []);

  function handleClick(value) {
    history.push(`/types/${value}`);
  }

  return (
    <Container>
      <Header>
        <Title>Pokemon Types</Title>
        <span>How much types: {countTypes}</span>
      </Header>

      <Grid>
        { types.map(name => (
        <TileType 
          key={name} 
          value={name} 
          onClick={e => handleClick(e.target.value)}
        >
          {name}
        </TileType>
        ))}
      </Grid>
    </Container>
  )
}

export default Types;