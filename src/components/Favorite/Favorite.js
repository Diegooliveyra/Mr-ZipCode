import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';

import { ReactComponent as BackButton } from '../../assets/back.svg';
import { ReactComponent as FavoriteButton } from '../../assets/favorite.svg';
import { ReactComponent as SaveButton } from '../../assets/save.svg';

import * as S from './styles';

const Favorite = ({ data }) => {
  const [adresses, setAdresses] = useLocalStorage('endereços', []);
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  useEffect(() => {
    let existingAddress = adresses.some((address) => address.cep === data.cep);
    setDisabled(existingAddress);
  }, [adresses, data]);

  function setFavoriteAddress() {
    setAdresses([
      ...adresses,
      {
        cep: data.cep,
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
      },
    ]);
    setDisabled(true);
  }
  return (
    <S.FavoriteButton disabled={disabled}>
      <button disabled={disabled} onClick={setFavoriteAddress}>
        <SaveButton />
        Salvar
      </button>
      <button onClick={() => history.push('/favorites')}>
        <FavoriteButton />
        Favoritos
      </button>

      <button onClick={() => history.push('/')}>
        <BackButton /> Voltar
      </button>
    </S.FavoriteButton>
  );
};

export default Favorite;
