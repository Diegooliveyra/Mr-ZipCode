import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 76px);
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

  form {
    display: flex;
    flex-direction: column;
  }

  span {
    font-size: 1.2rem;
    text-align: center;
    display: block;
    margin: 0 0 5px 0;
  }
`;
