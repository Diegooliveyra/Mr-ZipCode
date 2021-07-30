import styled from 'styled-components';

export const FavoriteButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  button {
    margin-bottom: 2rem;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;

    background: transparent;
    border: 0;

    :nth-child(1) svg path {
      fill: ${(props) => (props.disabled ? `#b70fd1` : `#333`)};
    }

    :nth-child(1) {
      color: ${(props) => (props.disabled ? `#ccc` : `#333`)};
      cursor: ${(props) => (props.disabled ? `no-drop` : `pointer`)};
    }
  }
`;
