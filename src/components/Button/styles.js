import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  background: var(--primary-color);
  color: var(--white);
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 4px 15px rgba(137, 18, 255, 0.1);
    transform: scale(1.02);
  }
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
    transform: scale(1);
  }
`;
