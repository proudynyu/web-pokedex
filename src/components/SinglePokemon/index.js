import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import api from '../../services/api';
import { 
  Container, 
  Header, 
  Content, 
  Title, 
  ImgContainer, 
  ImgGrid, 
  Subtitle, 
  Profile,
  ProfileContainer,
  Status,
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

  const [pokemon, setPokemon] = useState({
    name: '',
    height: '',
    baseXp: '',
    weight: '',
    hp: '',
    attack: '',
    defense: '',
    speed: '',
    specialAttack: '',
    specialDefense: '',
  })

  const [sprites, setSprites] = useState({
    front_default: '',
    back_default: '',
    front_female: '',
    back_female: '',
    front_shiny: '',
    back_shiny: '',
    front_shiny_female: '',
    back_shiny_female: '',
  })

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
        }

        setPokemon(poke);

        const type = data.types;
        setTypes(type)

        const move = data.moves;
        setMoves(move);

        const abilities = data.abilities;
        setSkills(abilities);
      })
  }, [name])

  return (
    <Container>
      <Header>
        <Title>{ name.charAt(0).toUpperCase() + name.slice(1) }</Title>
      </Header>

      <Content>
        <Profile>
          <img src={defaultSprite} alt=""/>
          <ProfileContainer>
            <Status>
              <span>Name:</span> <span>{ name.charAt(0).toUpperCase() + name.slice(1) }</span>
            </Status>
            <Status>
              <span>Heigth:</span> <span>{ pokemon.height }</span>
            </Status>
            <Status>
              <span>Base Xp:</span> <span>{pokemon.baseXp }</span>
            </Status>
            <Status>
              <span>Weight:</span> <span>{ pokemon.weight }</span>
            </Status>
          </ProfileContainer>
          <ProfileContainer>
            <Status>
              <span>HP: </span>
              <span>{ pokemon.hp }</span>
            </Status>
            <Status>
              <span>Attack: </span>
              <span>{ pokemon.attack }</span>
            </Status>
            <Status>
              <span>Defense: </span>
              <span>{ pokemon.defense }</span>
            </Status>
            <Status>
              <span>Speed: </span>
              <span>{ pokemon.speed }</span>
            </Status>
            <Status>
              <span>Special-Attack: </span>
              <span>{ pokemon.specialAttack }</span>
            </Status>
            <Status>
              <span>Special-Defense: </span>
              <span>{ pokemon.specialDefense }</span>
            </Status>
          </ProfileContainer>
        </Profile>
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
          <Title>Evolutions</Title>
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