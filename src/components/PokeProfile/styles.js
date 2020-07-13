import styled from 'styled-components';

export const Profile = styled.div`
  display: flex;
  width: 90%;
  margin: auto;
  align-items: center;

  > img {
    width: 150px;
    height: 150px;
    background-color: var(--first);
    border-radius: 8px;
    border: 1px dashed var(--royal);
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 300px;
  margin-left: 18px;

  color: var(--word);
  font-size: 20px;
  font-weight: bold;
`;

export const Status = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  padding: 0 5px;
  margin: 5px;
`;