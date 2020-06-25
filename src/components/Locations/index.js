import React, { useEffect, useState } from 'react';
import Title from '../../layout/Title';
import api from '../../services/api';

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const [totalLocation, setTotalLocation] = useState(0);

  useEffect(() => {
    api.get('location')
      .then(resp => {
        const data = resp.data;
        const total = data.count;
        const results = data.results;
        setLocations(results);
        setTotalLocation(total);
      })
      .catch(err => console.log(err)) 
  }, []);

  return (
    <div>
      <Title title="Locations across Pokemon World" />
      <h3>Total locations: {totalLocation}</h3>
    </div>
  )
}

export default Locations;