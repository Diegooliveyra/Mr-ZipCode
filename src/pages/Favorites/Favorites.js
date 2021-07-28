import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

import * as S from './styles';

const Favorites = () => {
  const [address] = useLocalStorage('endereços');

  return (
    <S.Wrapper>
      <ul>
        {address &&
          address.map((endereco) => (
            <li key={endereco.cep}>
              <p>Cep:{endereco.cep}</p>
              <p>Rua:{endereco.logradouro}</p>
            </li>
          ))}
      </ul>
    </S.Wrapper>
  );
};

export default Favorites;
