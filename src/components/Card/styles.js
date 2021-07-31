import styled from 'styled-components';

export const ContentCard = styled.ul`
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;

  @media (max-width: 970px) {
    justify-content: center;
  }

  li {
    max-width: 300px;
    width: 100%;
    min-height: 445px;
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
  }

  img {
    border-radius: 5px;
    margin-bottom: 1.5rem;
  }

  div {
    flex: 1;

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

    button,
    a {
      background: transparent;
      border: 0;
      cursor: pointer;
      color: var(--black);

      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
`;

export const Map = styled.section`
  margin-bottom: 1rem;
  height: 260px;
`;
