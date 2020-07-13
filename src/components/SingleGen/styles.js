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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;

  padding: 5px 10px;
  margin-top: 8px;

  background-color: var(--fourth);
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: var(--word);
`;

export const Subtitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: var(--word);
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Grid = styled.div`
  display: grid;
  width: 80%;
  margin: 5px auto;
  grid-template-columns: repeat(auto-fit, minmax(180px, 240px));
  grid-gap: 5px;

  > span {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 18px;
    font-weight: bold;
    color: var(--royal);

    border-radius: 5px;

    height: 2rem;

    margin: 5px 10px;
    padding: 5px;

    box-shadow: var(--default-shadow);
  }
`;

export const TileType = styled.button`
  background-color: var(--royal);
  border-radius: 15px;
  border: 1px solid var(--royal);

  display: flex;
  justify-content: center;
  align-items: center;

  height: 2.5rem;

  cursor: pointer;

  color: var(--word);
  font-size: 18px;

  transition: background-color .5s;

  &:hover {
    background-color: transparent;
  }
`;

export const PokeContainer = styled.button`
  border: 0.5px solid var(--royal);
  border-radius: 8px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  outline: none;

  font-size: 16px;
  color: var(--word);

  transition: background-color .2s;

  height: 2rem;

  cursor: pointer;

  /* box-shadow: var(--default-shadow); */

  &:hover {
    background-color: var(--first);
  }
`;