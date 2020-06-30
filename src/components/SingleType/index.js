import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import Wrapper from '../Wrapper';
import Sprite from './Sprite';
import { Container, Header, Content, Title, Grid, TileType, PokeGrid } from './styles';
import api from '../../services/api';

import './test.css';

const SingleType = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [generation, setGeneration] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [piece, setPiece] = useState([]);

  const [pageCount, setPageCount] = useState();
  const [pagination, setPagination] = useState({
    offset: 0,
    perPage: 10,
    currentPage: 0,
  });

  const [type, setType] = useState({
      relations: []
    }
  )

  useEffect(() => {
    api.get(`type/${slug}`)
      .then( resp => {
        const data = resp.data;
        const damage = data.damage_relations;
        const receiveDouble = damage.double_damage_from;
        const dealsDouble = damage.double_damage_to;
        const receivesHalf = damage.half_damage_from;
        const dealsHalf = damage.half_damage_to;
        const receiveNone = damage.no_damage_from;
        const dealsNone = damage.no_damage_to;

        setType({
          relations:[
            { damage_type: receiveDouble, name: 'Receives Double Damage'},
            { damage_type: dealsDouble, name: 'Deals Double Damage' },
            { damage_type: receivesHalf, name: 'Receives Half Damage' },
            { damage_type: dealsHalf, name: 'Deals Half Damage' },
            { damage_type: receiveNone, name: 'Receives No Damage' },
            { damage_type: dealsNone, name: 'Deals No Damage' }
          ]
        });

        const generations = data.game_indices;
        setGeneration(generations);

        const pokemon = data.pokemon;
        const slice = pokemon.slice(pagination.offset, pagination.offset + pagination.perPage);
        setPiece(slice);

        const totalPoke = Math.ceil(Number(pokemon.length) / pagination.perPage);
        setPageCount(totalPoke);
        setPokemons(pokemon);
      });

  }, [slug]);

  useEffect(() => {
    const slice = pokemons.slice(pagination.offset, pagination.offset + pagination.perPage);
    setPiece(slice);
  }, [pagination])

  function handleClick(value){
    history.replace(`/types/${value}`);
  }

  function handlePage(e) {
    const selectedPage = e.selected;
    const offset = selectedPage * pagination.perPage;

    setPagination({
      ...pagination,
      offset: offset,
      currentPage: selectedPage,
    })
  }

  return (
    <Container>
      <Header>
        <Title>Type { slug }</Title>
      </Header>

      <Content>
        <Title>Damage Relations</Title>

        { 
          type.relations.map( obj => (
          <Wrapper
            onEvent={e => handleClick(e.target.value)}
            key={obj.name}
            subtitle={obj.name}
            data={obj.damage_type}
          />
          ))
        }

      </Content>

      <Content>
        <Title>Generations</Title>
        
        <Grid>
        {
          generation.map(gen => (
            <TileType 
              key={gen.generation.name}
            >
              {gen.generation.name}
            </TileType>
          ))
        }
        </Grid>
      </Content>

      <Content>
        <Title>Pokemons</Title>

        <PokeGrid>

        { piece.map(poke =>(
            <Sprite
              key={poke.pokemon.name}
              name={poke.pokemon.name}
              url={poke.pokemon.url}
            />
          ))
        }
        </PokeGrid>

        <ReactPaginate
          previousLabel={"prev"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePage}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          initialPage={0}
          forcePage={0}
        />

      </Content>
    </Container>
  )
}

export default SingleType;