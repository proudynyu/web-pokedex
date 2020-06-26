import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  width: 20vw;
  height: 80vh;

  background-color: var(--first);
  border-radius: 8px;
  border: 3px double white;
`;

export const Hiper = styled(Link)`
  text-decoration: none;
  flex: 1;
  text-align: center;
  color: var(--fourth);
  font-size: 18px;
  font-weight: bold;
`;


