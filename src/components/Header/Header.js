import React from 'react';
import * as S from './styles.js';

import { ReactComponent as LogoGithub } from '../../assets/github.svg';
import {ReactComponent as Logo} from '../../assets/logo.svg'

const Header = () => {
  return (
    <S.Header>
      <S.HeaderWrapper>
        <Logo/>
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
