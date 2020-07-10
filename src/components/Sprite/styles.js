import styled from 'styled-components';

export const PokeContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border: 1px solid var(--fifth);
  border-radius: 4px;
  padding: 5px;
  background-color: transparent;
  outline: none;

  color: var(--word);

  transition: background-color .2s;

  cursor: pointer;

  box-shadow: var(--default-shadow);

  &:hover {
    background-color: var(--first);
  }
`;