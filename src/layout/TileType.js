import React from 'react';

const TileType = ({ types }) => {
  return (
    <div className="poke-types">
    { types.map(name => (
      <div className="type" key={name}>
        <h2>{name}</h2>
      </div>
    ))}
  </div>
  )
}

export default TileType;