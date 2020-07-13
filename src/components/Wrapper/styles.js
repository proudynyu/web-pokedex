import styled from 'styled-components';

export const Subtitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: var(--word);
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
  width: 80%;
  margin: 15px auto;
  grid-template-columns: repeat(auto-fit, minmax(180px, 240px));
  grid-gap: 8px;
`;

export const TileType = styled.button`
  background-color: var(--royal);
  border-radius: 15px;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.5rem;

  cursor: pointer;

  color: var(--word);
  font-size: 18px;

  transition: transform .2s, background-color .2s;

  &:hover {
    background-color: transparent;
    border: 1px solid var(--royal);
    transform: scale(1.02);
  }
`;