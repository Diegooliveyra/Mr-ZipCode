import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  min-height: calc(100vh - 76px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  @media (max-width: 720px) {
    flex-direction: column;
    text-align: center;
  }

  img {
    max-width: 400px;
    width: 100%;
  }

  div {
    padding: 2rem;
  }

  h1 {
    font-size: 12rem;
    text-transform: uppercase;
    line-height: 12rem;
    color: var(--primary-color);

    @media (max-width: 720px) {
      font-size: 8rem;
      line-height: 8rem;
    }
  }
  h2 {
    font-size: 5rem;
    line-height: 6rem;
    text-transform: uppercase;

    @media (max-width: 720px) {
      font-size: 4rem;
      line-height: 4rem;
    }
  }
  h3 {
    font-size: 5rem;
    text-transform: uppercase;

    @media (max-width: 720px) {
      font-size: 4rem;
    }
  }
`;
