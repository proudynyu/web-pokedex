import React from 'react';
import { Profile, ProfileContainer, Status } from './styles';

const PokeProfile = ({
  name,
  sprite,
  height,
  basexp,
  weight,
  hp,
  defense,
  attack,
  specialAttack,
  speed,
  specialDefense
}) => {
  return (
    <Profile>
      <img src={sprite} alt=""/>
      <ProfileContainer>
        <Status>
          <span>Name:</span> <span>{ name.charAt(0).toUpperCase() + name.slice(1) }</span>
        </Status>
        <Status>
          <span>Heigth:</span> <span>{ height }</span>
        </Status>
        <Status>
          <span>Base Xp:</span> <span>{ basexp }</span>
        </Status>
        <Status>
          <span>Weight:</span> <span>{ weight }</span>
        </Status>
       </ProfileContainer>
       <ProfileContainer>
        <Status>
          <span>HP: </span>
          <span>{ hp }</span>
        </Status>
        <Status>
          <span>Attack: </span>
          <span>{ attack }</span>
        </Status>
        <Status>
          <span>Defense: </span>
          <span>{ defense }</span>
        </Status>
        <Status>
          <span>Speed: </span>
          <span>{ speed }</span>
        </Status>
        <Status>
          <span>Special-Attack: </span>
          <span>{ specialAttack }</span>
        </Status>
        <Status>
          <span>Special-Defense: </span>
          <span>{ specialDefense }</span>
        </Status>
      </ProfileContainer>
    </Profile>
  )
}

export default PokeProfile;