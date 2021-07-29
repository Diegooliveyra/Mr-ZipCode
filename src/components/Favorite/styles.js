import styled from 'styled-components';

export const FavoriteButton = styled.div`
  width: calc(100% - 16px);
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    margin-bottom: 2rem;
    padding: 5px;
    display: flex;
    justify-self: flex-end;
    cursor: pointer;
    background: transparent;
    border: 0;
  }
`;
