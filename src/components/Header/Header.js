import React from 'react';
import * as S from './styles.js';

import { ReactComponent as LogoGithub } from '../../assets/github.svg';

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <h2>Logo</h2>
        <ul>
          <li>
            <a
              href="https://github.com/Diegooliveyra"
              target="_blank"
              rel="noreferrer"
            >
              <LogoGithub />
            </a>
          </li>
        </ul>
      </S.HeaderWrapper>
    </S.Header>
  );
};

export default Header;
