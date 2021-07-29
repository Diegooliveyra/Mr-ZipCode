import React from 'react';
import Card from '../../components/Card/Card';
import useLocalStorage from '../../hooks/useLocalStorage';

import * as S from './styles';

const Favorites = () => {
  const [address] = useLocalStorage('endereços', []);

  return (
    <S.Wrapper>
      {address ? <Card data={address} /> : <h3>Nenhum endereço salvo</h3>}
    </S.Wrapper>
  );
};

export default Favorites;
