import React, {  useState, useEffect } from 'react';
import Title from '../../layout/Title';
import TileType from '../../layout/TileType';
import api from '../../services/api';

const Types = () => {
  const [types, setTypes] = useState([]);
  const [countTypes, setCountTypes] = useState(0);

  useEffect(() => {
    api.get('type')
      .then( resp => {
        const data = resp.data;
        const typeNames = data.results.map( type => type.name ); 
        setTypes(typeNames);
        setCountTypes(typeNames.length);
      })
      .catch( err => console.log(err))
  }, []);

  return (
    <div>
      <Title title={`Pokemon types: ${countTypes}`}/>
      <TileType types={types} />
    </div>
  )
}

export default Types;