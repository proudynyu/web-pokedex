import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Header, Title } from './styles';
import api from '../../services/api';

const SingleGen = () => {
  const { gen } = useParams();

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

  return (
    <Container>
      <Header>
        <Title>{ name.charAt(0).toUpperCase() + name.slice(1) }</Title>
      </Header>
    </Container>
  )
}

export default SingleGen;