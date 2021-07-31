import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  padding: 15px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 18px 41px rgba(0, 0, 0, 0.05);
  z-index: 999;
  display: inline;
`;

export const HeaderWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      left: ${(props) => (props.menuMobile ? '0;' : '-100%')};
      width: 100%;
      height: 100vh;
      background-color: var(--primary-color);
      color: var(--white);
      z-index: 999;
      transition: ease-in 0.2s;
    }

    a {
      display: flex;
      align-items: center;
      gap: 5px;
      color: var(--black);

      @media (max-width: 600px) {
        color: var(--white);
        font-size: 2.5rem;
      }
    }
  }
`;

export const Hamburguer = styled.div`
  width: 3rem;
  height: 2.5rem;
  z-index: 99999;
  display: none;
  justify-content: space-around;
  flex-flow: column nowrap;
  cursor: pointer;

  @media (max-width: 600px) {
    display: flex;
  }

  div {
    width: 3rem;
    height: 0.4rem;
    background-color: var(--black);
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ menuMobile }) =>
        menuMobile ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ menuMobile }) =>
        menuMobile ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ menuMobile }) => (menuMobile ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ menuMobile }) =>
        menuMobile ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
