import styled from 'styled-components';

export const Subtitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: var(--fourth);
  margin-bottom: 5px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
  margin-top: 5px;
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 5px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 5px;
`;

export const TileType = styled.button`
  background-color: var(--second);
  border: 2px solid white;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;

  cursor: pointer;

  color: var(--fourth);
  font-size: 18px;

  transition: transform .2s, background-color .2s;

  &:hover {
    background-color: var(--third);
    transform: scale(1.02);
  }
`;