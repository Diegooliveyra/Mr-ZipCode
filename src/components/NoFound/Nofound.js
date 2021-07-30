import React from 'react';
import * as S from './styles';

import NoFoundImg from '../../assets/nofound-dog.webp';

const Nofound = () => {
  return (
    <S.Wrapper>
      <img src={NoFoundImg} alt="" />
      <div>
        <h1>Cep</h1>
        <h2>não </h2>
        <h3>encontrado :(</h3>
      </div>
    </S.Wrapper>
  );
};

export default Nofound;
