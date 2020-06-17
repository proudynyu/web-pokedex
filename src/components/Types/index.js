import React, {  useState, useEffect } from 'react';
import api from '../../services/api';

const Types = () => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    api.get('type')
      .then( resp => {
        const data = resp.data;
        const typeNames = data.results.map( type => type.name ); 
        setTypes(typeNames)
      })
      .catch( err => console.log(err))
  }, []);

  return (
    <div>
      <h1>Pokemon types: </h1>
      { types.map(name => <h2>{name}</h2>)}
    </div>
  )
}

export default Types;