import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Sprite from '../Sprite';
import { Container, Content, Header, Title, Grid } from './styles';
import api from '../../services/api';

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [piece, setPiece] = useState([])
  const [pagination, setPagination] = useState({
    offset: 0,
    currentPage: 0,
    perPage: 20,
  })

  useEffect(()=> {
    api.get('pokemon/?offset=0&limit=964')
      .then(resp => {
        const data = resp.data;
        const poke = data.results;
        setPokemons(poke);

        const slice = poke.slice(pagination.offset, pagination.offset + pagination.perPage);
        const total = Math.ceil(poke.length / pagination.perPage)

        setPageCount(total);
        setPiece(slice);
      })
  }, []);

  useEffect(() => {
    const slice = pokemons.slice(pagination.offset, pagination.offset + pagination.perPage);
    setPiece(slice)
  }, [pagination])

  function handlePage(e){
    const pageSelected = e.selected;
    const offset = pageSelected * pagination.perPage;

    setPagination({
      ...pagination,
      offset: offset,
      currentPage: pageSelected,
    })
  }

  return (
    <Container>
      <Header>
        <Title>All Pokemons</Title>
      </Header>
      <Content>
        <Grid>
        { piece.map(poke => (
          <Sprite
            key={poke.name}
            name={poke.name}
            url={poke.url}
          />
        ))}
      </Grid>
      </Content>
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
    </Container>
  )
}

export default Pokemon;