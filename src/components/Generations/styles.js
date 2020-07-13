import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  display: flex;
  height: auto;
  flex-direction: column;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 4rem;
  padding: 5px;

  justify-content: center;
  align-items: center;
  background-color: var(--fourth);
  border-radius: 4px;

  > span {
    color: var(--third);
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: var(--word);
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 15px;
  grid-template-columns: repeat(auto-fit, minmax(180px, 240px));
  grid-gap: 8px;
`;

export const TileType = styled.button`
  background-color: var(--royal);
  border-radius: 15px;
  border: 1px solid var(--royal);

  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.5rem;

  cursor: pointer;

  color: var(--word);
  font-size: 18px;

  transition: transform .2s, background-color .5s;

  &:hover {
    background-color: transparent;
    transform: scale(1.01);
  }
`;