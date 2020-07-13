import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'
import { Container, Header, Title, Content, Subtitle, Grid, TileType, PokeContainer } from './styles';
import api from '../../services/api';

const SingleGen = () => {
  const { gen } = useParams();
  const history = useHistory();

  const [name, setName] = useState('')
  const [main, setMain] = useState('');
  const [species, setSpecies] = useState([]);
  const [types, setTypes] = useState([]);
  const [versions, setVersion] = useState([]);

  useEffect(() => {
    api.get(`generation/${gen}`)
      .then(resp => {
        const data = resp.data;

        const genName = data.name;
        const mainRegion = data.main_region.name;
        const pokeSpecies = data.pokemon_species;
        const pokeTypes = data.types;
        const versionGames = data.version_groups;

        setName(genName);
        setMain(mainRegion);
        setSpecies(pokeSpecies);
        setTypes(pokeTypes);
        setVersion(versionGames);
      })
  },[]);

  function handleClick(value) {
    history.push(`/types/${value}`)
  }

  if (name === '') {
    return (
      <Container>
        <Header>
          <Title>Loading ...</Title>
        </Header>
      </Container>
    )
  }

  return (
    <Container>
      <Header>
        <Title>{ name.charAt(0).toUpperCase() + name.slice(1) }</Title>
      </Header>

      <Content>
        <Subtitle>
          Main region: 
          <Grid>
            <span>{ main.charAt(0).toUpperCase() + main.slice(1) }</span>
          </Grid>
        </Subtitle>

        <Subtitle>
          Game Versions: 
        </Subtitle>
        <Grid>
          {
            versions.map(obj => (
              <span key={obj.name}>{ obj.name }</span>
            ))
          }
        </Grid>

        <Subtitle>
          Types in this generations:
        </Subtitle>
        <Grid>
          {
            types.map(obj => (
              <TileType
                key={obj.name}
                value={obj.name}
                onClick={e => handleClick(e.target.value)}
              >
                { obj.name }
              </TileType>
            ))
          }
        </Grid>

        <Subtitle>
          Species in this generations:
        </Subtitle>
        <Grid>
        { 
          species.map(poke =>(
            <span
              key={poke.name}
            >
              { poke.name }
            </span>
          ))
        }
        </Grid>
      </Content>
    </Container>
  )
}

export default SingleGen;