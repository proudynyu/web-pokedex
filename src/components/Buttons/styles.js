import styled from 'styled-components';

export const List = styled.li`
  list-style: none;

  margin: 10px auto;
  width: 100%;
  height: 2.5rem;

  background-color: var(--fifth);
  border-radius: 4px;
  border: 1px solid var(--fifth);
  

  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .2s, background-color .5s;

  cursor: pointer;

  &:hover {
    background-color: transparent;
  }
`;