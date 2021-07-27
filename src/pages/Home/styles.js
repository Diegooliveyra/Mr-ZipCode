import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 600;
    /* text-transform: uppercase; */
    margin-top: 20px;
  }

  p {
    font-size: 1.4rem;
    margin: 5px;
  }
`;
