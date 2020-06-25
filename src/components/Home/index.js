import React, { useState } from 'react';
// import Title from '../../layout/Title'
import { useHistory } from 'react-router-dom';

import { Container, Title, Subtitle, Header, Content, Text, Field } from './styles';

const Home = () => {
  const history = useHistory();
  const [pokename, setPokename] = useState('');
  console.log(pokename);

  function handleSubmit(){
    history.push(`/pokemon/${pokename}`);
  }

  return (
    <Container>
      <Header>
        <Title>Welcome to the Web Pokedex</Title>
        <span>Created by Igor Becker</span>
      </Header>

      <Content>
        <Text>
          <Subtitle>About</Subtitle>
          <p>This site is created for you to search information about Pokemons.</p>
          <p>You can start using the sidebar for navigation.</p>
          <p>Or you can search a pokemon by it's name right below</p>
          <br/>
          <Subtitle>What is a Pokemon?</Subtitle>
          <span><a href="#">See in Wikipedia</a></span>
          <p>Pokémon[a] (English: /ˈpoʊkɪˌmɒn, -ki-, -keɪ-/),[1][2][3] also known as Pocket Monsters[b] in Japan,
            is a Japanese media franchise managed by the Pokémon Company, a company founded and with shares divided
            between Nintendo, Game Freak, and Creatures.[4] The franchise copyright and Japanese trademark is shared
            by all three companies,[5] but Nintendo is the sole owner of the trademark in other countries.[6] The 
            franchise was created by Satoshi Tajiri in 1995,[7] and is centered on fictional creatures called "Pokémon",
            which humans, known as Pokémon Trainers, catch and train to battle each other for sport. The English slogan 
            for the franchise is "Gotta Catch 'Em All".[8][9] Works within the franchise are set in the Pokémon universe.</p>
        </Text>

        <Field>
          <form>
            <label htmlFor="pokemin">Pokemon Name:</label>
            <input 
              type="text"
              name="pokemon"
              value={pokename}
              onChange={e => setPokename(e.target.value)}
            />
          </form>
        </Field>
      </Content>
    </Container>
  )
}

export default Home;