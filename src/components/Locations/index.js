import React, { useEffect, useState } from 'react';
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
      <h1>Total locations: {totalLocation}</h1>
    </div>
  )
}

export default Locations;