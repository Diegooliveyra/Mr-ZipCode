import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import * as S from './styles.js';

const Header = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  console.log(menuMobile);

  return (
    <S.Header>
      <S.HeaderWrapper menuMobile={menuMobile}>
        <Link to="/">
          <Logo />
        </Link>

        <S.Hamburguer
          menuMobile={menuMobile}
          onClick={() => setMenuMobile(!menuMobile)}
        >
          <div />
          <div />
          <div />
        </S.Hamburguer>

        <ul>
          <li>
            <Link to="/" onClick={() => setMenuMobile(!menuMobile)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites" onClick={() => setMenuMobile(!menuMobile)}>
              Meus Favoritos
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/Diegooliveyra"
              target="_blank"
              rel="noreferrer"
            >
              Código Fonte
            </a>
          </li>
        </ul>
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
