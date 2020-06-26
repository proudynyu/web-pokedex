import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Wrapper from '../Wrapper';

import { Container, Header, Content, Title } from './styles';

import api from '../../services/api';

const SingleType = () => {
  const { slug } = useParams();
  const [receiveDouble, setReceiveDouble] = useState([]);
  const [dealsDouble, setDealsDouble] = useState([]);

  useEffect(() => {
    api.get(`type/${slug}`)
      .then( resp => {
        const data = resp.data;
        const damage = data.damage_relations;
        setReceiveDouble(damage.double_damage_from);
        setDealsDouble(damage.double_damage_to);
      })
  }, []);

  return (
    <Container>
      <Header>
        <Title>Type { slug }</Title>
      </Header>

      <Content>
        <Title>Damage Relations</Title>
        
        <Wrapper 
          subtitle="Receive Double Damage"
          data={receiveDouble}
        />

        <Wrapper
          subtitle="Deals Double Damage"
          data={dealsDouble}
        />

      </Content>

    </Container>
  )
}

export default SingleType;