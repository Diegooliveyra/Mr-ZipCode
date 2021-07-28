import React from 'react';
import * as S from './styles.js';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>

        <ul>
          <li>
            <Link to="/favorites">Meus Favoritos</Link>
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
