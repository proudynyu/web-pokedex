import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Wrapper from '../Wrapper';

import { Container, Header, Content, Title } from './styles';

import api from '../../services/api';

const SingleType = () => {
  const history = useHistory();
  const { slug } = useParams();
  const [type, setType] = useState(
    {
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
      });

  }, [slug]);

  function handleClick(value){
    history.replace(`/types/${value}`);
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

    </Container>
  )
}

export default SingleType;