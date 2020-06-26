import React from 'react';
import { Container, Subtitle, Grid, TileType } from './styles';

const Wrapper = ({
  subtitle,
  data
}) => {
  return (
    <Container>
      <Subtitle>{ subtitle }</Subtitle>
      <Grid>
        
        { data.map( item =>
          <TileType 
           key={item.name} 
           value={item.name} 
          >

          {item.name}

          </TileType>
        )}

      </Grid>
    </Container>
  )
}

export default Wrapper;