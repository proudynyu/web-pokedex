import React from 'react';
import { Container, Subtitle, Grid, TileType } from './styles';

const Wrapper = ({
  onEvent,
  subtitle,
  data
}) => {
  return (
    <Container>
      <Subtitle>{ subtitle }</Subtitle>
      <Grid>
        
        { data.map( item =>
          <TileType 
           onClick={onEvent}
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