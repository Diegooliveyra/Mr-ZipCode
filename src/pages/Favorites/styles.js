import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 100rem;
  margin: 0 auto;
  padding: 2rem;
  min-height: calc(100vh - 77px);
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    /* justify-content: space-around; */
    gap: 2.5rem;
    flex-wrap: wrap;

    li {
      width: 300px;
      height: 400px;
      border: 1px solid #999;
    }
  }
`;
