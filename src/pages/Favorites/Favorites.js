import React from 'react';
import Card from '../../components/Card/Card';
import useLocalStorage from '../../hooks/useLocalStorage';

import * as S from './styles';

const Favorites = () => {
  const [address] = useLocalStorage('endereços', []);

  return (
    <S.Wrapper>
      {address.length ? <Card data={address} /> : <p>Nenhum endereço salvo</p>}
    </S.Wrapper>
  );
};

export default Favorites;
