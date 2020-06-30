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

export const Subtitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  color: var(--word);
  margin-bottom: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;

  padding: 5px;
  margin-top: 8px;

  background-color: var(--fourth);
  border-radius: 4px;
`;

export const Text = styled.div`
  flex: 1;
  font-size: 16px;
  color: var(--word);

  > span {
    font-size: 14px;
    
      > a {
        text-decoration: none;
        color: var(--fifth);
      }
  }
  
  > p {
    font-size: 18px;
  }

`;

export const Field = styled.fieldset`
  flex: 1;
  margin-top: 10px;
  border: none;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    font-size: 18px;
    font-weight: bold;
    color: var(--word);
  }

  > input {
    border-radius: 4px;
    padding: 5px 10px;
    width: 50%;
    border: none;
    outline: none;
    margin-top: 5px;
    font-size: 18px;
    color: var(--fifth);
    background-color: var(--first);
  }
`;