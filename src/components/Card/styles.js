import styled from 'styled-components';

export const ContentCard = styled.ul`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

  li {
    width: 300px;
    min-height: 430px;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }

  img {
    border-radius: 5px;
    margin-bottom: 1rem;
  }

  div {
    flex: 2;

    p {
      line-height: 2.5rem;
    }
    span {
      font-weight: 600;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      border: 0;
      cursor: pointer;

      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;
