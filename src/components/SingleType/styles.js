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
  color: var(--fourth);
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px;
  margin-top: 5px;
`;

export const Grid = styled.div`
  display: grid;
  width: 80%;
  margin: 15px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-gap: 8px;
`;

export const TileType = styled.button`
  background-color: var(--fifth);
  border: 1px solid var(--fifth);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 2rem;

  cursor: pointer;

  color: var(--word);
  font-size: 18px;

  transition: transform .2s, background-color .2s;

  &:hover {
    background-color: transparent;
    transform: scale(1.03);
  }
`;

export const PokeGrid = styled.div`
  display: grid;
  width: 80%;
  margin: 10px auto;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  grid-gap: 8px;

  @media (max-width: 800px) {
    margin: 10px auto;
    width: 90%;
    grid-template-columns: repeat(auto-fit, minmax(150px, 250px));
  }
`;

export const PokeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid var(--fifth);
  border-radius: 4px;
  padding: 5px;

  color: var(--word);

  transition: background-color .2s;

  cursor: pointer;

  box-shadow: var(--default-shadow);

  &:hover {
    background-color: var(--first);
  }
`;