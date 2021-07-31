import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 90rem;
  min-height: calc(100vh - 76px);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Map = styled.div`
  background-color: aliceblue;
  height: 280px;
  width: 400px;
`;

export const InfoAddress = styled.div`
  flex: 1;
  padding: 2rem;

  h2 {
    margin-bottom: 2rem;
    color: var(--primary-color);
  }

  span {
    font-weight: 600;
  }

  ul li {
    padding: 0.6rem 0;
    font-size: 1.8rem;
  }
`;
