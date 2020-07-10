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

export const Grid = styled.div`
  display: grid;
  width: 90%;
  margin: 10px auto;
  grid-template-columns: repeat(auto-fit, minmax(150px, 200px));
  grid-gap: 5px;
`;