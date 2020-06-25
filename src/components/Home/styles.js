import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  display: flex;
  height: 75vh;
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

export const Subtitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: var(--fourth);
  margin-bottom: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;

  padding: 5px;

  background-color: var(--second);
  border-radius: 4px;
  border: 2px solid var(--fourth);
`;

export const Text = styled.div`
  flex: 1;

  > span {
    font-size: 16px;
    
      > a {
        text-decoration: none;
      }
  }
  
  > p {
    font-size: 18px;
  }

`;

export const Field = styled.fieldset`
  flex: 1;
  margin-top: 10px;
`;