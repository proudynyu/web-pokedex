import React, { useEffect, useState } from 'react';
import { 
  Container,
  Header,
  Title,
  Content,
  TileType,
  Grid
} from './styles';

import ReactPaginate from 'react-paginate'
import api from '../../services/api';

const Species = () => {
  const [total, setTotal] = useState(0);
  const [poke, setPoke] = useState([]);
  const [piece, setPiece] = useState([])
  const [pagination, setPagination] = useState({
    offset: 0,
    perPage: 20,
    currentPage: 0,
  });

  useEffect(() => {
    api.get(`pokemon-species?offset=${pagination.offset}&limit=${pagination.perPage}`)
      .then(resp => {
        const data = resp.data;
        const count = data.count;
        const results = data.results;

        setPoke(results);

        const slice = poke.slice(pagination.offset, pagination.offset + pagination.perPage);
        const total = Math.ceil(count / pagination.perPage)

        setPiece(slice);
        setTotal(total)
      })
  }, [])

  useEffect(() => {
    api.get(`pokemon-species?offset=${pagination.offset}&limit=${pagination.perPage}`)
      .then(resp => {
        const data = resp.data;
        const count = data.count;
        const results = data.results;
        setPoke(results);
        const slice = poke.slice(pagination.offset, pagination.offset + pagination.perPage);
        setPiece(slice);
      });
  }, [pagination])

  function handlePage(e) {
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
        <Title>Species</Title>
      </Header>

      <Content>
        <Grid>
          {
            poke.map(obj => (
              <TileType
                key={obj.name}
                value={obj.name}
              >
                { obj.name }
              </TileType>
            ))
          }
        </Grid>
      </Content>
      <ReactPaginate
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={total}
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

export default Species;