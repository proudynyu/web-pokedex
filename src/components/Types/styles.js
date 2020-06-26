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

  justify-content: space-between;
  background-color: var(--second);
  border-radius: 4px;
  border: 2px solid var(--fourth);

  > span {
    color: var(--third);
    font-size: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: var(--fourth);
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