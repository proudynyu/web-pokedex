import React, {  useState, useEffect } from 'react';
import { Container, Header, Title, Grid, TileType } from './styles';

import api from '../../services/api';

const Types = () => {
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

  return (
    <Container>
      <Header>
        <Title>Pokemon Types</Title>
        <span>How much types: {countTypes}</span>
      </Header>

      <Grid>
        { types.map(name => (
        <TileType key={name}>
          <h2>{name}</h2>
        </TileType>
        ))}
      </Grid>
    </Container>
    // <div>
    //   <Title title={`Pokemon types: ${countTypes}`}/>
    //   <TileType types={types} />
    // </div>
  )
}

export default Types;