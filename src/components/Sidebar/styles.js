import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20vw;
  height: 80vh;

  background-color: var(--first);
  border-radius: 8px;
  box-shadow: var(--default-shadow);

  > ul {
    width: 90%;
  }
`;

export const Hiper = styled(Link)`
  text-decoration: none;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--word);
  font-size: 18px;
  font-weight: bold;

  > span {
    display: flex;
    margin-right: 10px;
  }
`;


