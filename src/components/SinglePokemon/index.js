import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PokeProfile from '../PokeProfile';

import api from '../../services/api';
import { 
  Container, 
  Header, 
  Content, 
  Title, 
  ImgContainer, 
  ImgGrid, 
  Subtitle,
  Grid,
  TileType
} from './styles';

const SinglePokemon = () => {
  const { name } = useParams();
  const [defaultSprite, setDefaultSprite] = useState('');
  const [objKeys, setObjKeys] = useState([]);
  const [types, setTypes] = useState([]);
  const [moves, setMoves] = useState([]);
  const [skills, setSkills] = useState([]);
  const [pokemon, setPokemon] = useState();
  const [sprites, setSprites] = useState();
  const [species, setSpecies] = useState('');

  useEffect(() => {
    api.get(`pokemon/${name}`)
      .then(resp => {
        const data = resp.data;
        const allSprites = data.sprites;
        const basicSprite = allSprites.front_default;
        setDefaultSprite(basicSprite);

        setSprites(allSprites);

        const keys = Object.keys(allSprites);
        setObjKeys(keys);

        const poke = {
          name: data.name,
          height: data.height,
          baseXp: data.base_experience,
          weight: data.weight,
          hp: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[3].base_stat,
          specialAttack: data.stats[4].base_stat,
          specialDefense: data.stats[5].base_stat,
        };
        setPokemon(poke);

        const type = data.types;
        setTypes(type)

        const move = data.moves;
        setMoves(move);

        const abilities = data.abilities;
        setSkills(abilities);

        const specie = data.species;
        setSpecies(specie);
      });
  }, [name]);

  if (!pokemon) {
    return (
      <Container>
        <Header>
          <Title>Carregando ...</Title>
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
        <PokeProfile
          sprite={defaultSprite}
          name={name}
          height={pokemon.height}
          basexp={pokemon.baseXp}
          weight={pokemon.weight}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          specialAttack={pokemon.specialAttack}
          specialDefense={pokemon.specialDefense}
        />
      </Content>

      <Content>
        <Title>Types</Title>
        <Grid>
          {
            types.map( obj => (
              <TileType  
                key={ obj.type.name }
                value={ obj.type.name } 
              >
                { obj.type.name }
              </TileType>
            ))
          }
        </Grid>
      </Content>
      
      <Content>
          <Title>Species</Title>
          <Grid>
            <TileType
              value={species.name}
            >
              {species.name}
            </TileType>
          </Grid>
      </Content>

      <Content>
        <Title>Abilities</Title>
        <Grid>
          {
            skills.map( obj => (
              <TileType
                key={ obj.slot }
                value={ obj.ability.name }
              >
                { obj.ability.name }
              </TileType>
            ))
          }
        </Grid>
      </Content>

      <Content>
        <Title>Moves</Title>
        <Grid>
          {
            moves.map( obj => (
              <TileType
                key={obj.move.name}
                value={obj.move.name}
              >
                { obj.move.name }
              </TileType>
            ))
          }
        </Grid>
      </Content>

      <Content>
        <Subtitle>Sprites</Subtitle>
        <ImgGrid>
          { 
            objKeys.map(key => (
              <ImgContainer>
                <span>{ key }</span>
                <img src={sprites[key]} alt=""/>
              </ImgContainer>
           ))
          }
        </ImgGrid>
      </Content>
    </Container>
  )
}

export default SinglePokemon;