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
  ProfileContainer } from './styles';

const SinglePokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([])
  const [defaultSprite, setDefaultSprite] = useState('');
  const [objKeys, setObjKeys] = useState([]);

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
        const basic = allSprites.front_default;
        setDefaultSprite(basic);

        setSprites(allSprites);

        const keys = Object.keys(allSprites);
        setObjKeys(keys);
      })
  }, [name])

  console.log(objKeys);

  return (
    <Container>
      <Header>
        <Title>{ name.charAt(0).toUpperCase() + name.slice(1) }</Title>
      </Header>

      <Content>
        <Profile>
          <img src={defaultSprite} alt=""/>
          <ProfileContainer>
            <span>Name:</span>
            <span>Heigth:</span>
            <span>Base Xp:</span>
            <span>Weight: </span>
          </ProfileContainer>
          <ProfileContainer>
            <span>HP:</span>
            <span>Attack:</span>
            <span>Defense:</span>
            <span>Speed: </span>
            <span>Special-Attack: </span>
            <span>Special-Defense: </span>
          </ProfileContainer>
        </Profile>
      </Content>

      <Content>
        <Subtitle>Sprites</Subtitle>
        <ImgGrid>
          { objKeys.map(key => (
            <ImgContainer>
              <span>{ key }</span>
              <img src={sprites[key]} alt=""/>
            </ImgContainer>
          ))}
        </ImgGrid>
      </Content>
    </Container>
  )
}

export default SinglePokemon;