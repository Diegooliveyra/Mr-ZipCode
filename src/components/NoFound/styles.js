import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  min-height: calc(100vh - 76px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 400px;
  }

  div {
    padding: 2rem;
  }

  h1 {
    font-size: 12rem;
    text-transform: uppercase;
    line-height: 12rem;

    color: var(--primary-color);
  }
  h2 {
    font-size: 5rem;
    line-height: 4rem;

    text-transform: uppercase;
  }
  h3 {
    font-size: 5rem;
    text-transform: uppercase;
  }
`;
