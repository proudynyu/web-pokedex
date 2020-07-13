import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import { Container, Grid, Header, Title, TileType } from './styles';

const Generations = () => {
  const history = useHistory();
  const [generation, setGeneration] = useState([]);

  useEffect(() => {
    api.get('generation')
      .then(resp => {
        const data = resp.data;
        setGeneration(data.results)
      })
  }, []);
  
  function handleClick(id) {
    history.push(`generations/${id+1}`);
  }

  return (
    <Container>
      <Header>
        <Title>Generations</Title>
      </Header>

      <Grid>
        {
          generation.map((obj, index) => (
            <TileType 
              key={obj.name} 
              value={obj.url}
              onClick={e => handleClick(index)}
            >
              { obj.name }
            </TileType>  
          ))
        }
      </Grid>    
    </Container>
  )
}

export default Generations;