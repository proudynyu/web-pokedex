import styled from 'styled-components';

export const List = styled.li`
  list-style: none;

  margin: 10px auto;
  width: 80%;
  height: 2rem;

  background-color: var(--fifth);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform .2s, background-color .2s;

  cursor: pointer;

  &:hover {
    background-color: var(--third);
    transform: scale(1.05);
  }
`;